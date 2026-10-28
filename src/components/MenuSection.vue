<script setup>
import {
  computed,
  nextTick,
  onBeforeUnmount,
  onMounted,
  ref,
  watch,
} from "vue";
import { lunchDays, lunches, portions, whatsappLink } from "../data/site";
import SectionHeading from "./SectionHeading.vue";

const CARD_LIMIT = 8;
const PHONE_QUERY = "(max-width: 700px)";
const LUNCH_BY_WEEKDAY = {
  Mon: "segunda",
  Tue: "terca",
  Wed: "quarta",
  Thu: "quinta",
  Fri: "sexta",
  Sat: "sabado",
};

function todayLunchId() {
  const weekday = new Intl.DateTimeFormat("en-US", {
    weekday: "short",
    timeZone: "America/Sao_Paulo",
  }).format(new Date());
  return LUNCH_BY_WEEKDAY[weekday] || "todos";
}

const dayId = ref(todayLunchId());
const lunchOpen = ref(false);
const portionsOpen = ref(false);
const isPhone = ref(window.matchMedia(PHONE_QUERY).matches);
const dayTabs = ref(null);
const lunchTrack = ref(null);
const portionTrack = ref(null);
const fromEdge = ref(0);

let phoneMedia;
let gesture = null;

const day = computed(
  () => lunchDays.find((item) => item.id === dayId.value) || lunchDays[0],
);

const lunchEntries = computed(() => {
  const items = (lunches[dayId.value] || []).map((item) => ({
    type: "dish",
    id: item.id,
    item,
  }));
  if (day.value.askDay) {
    items.unshift({ type: "ask", id: `ask-${day.value.id}` });
  }
  return items;
});

const visibleLunches = computed(() => {
  if (isPhone.value || lunchOpen.value) return lunchEntries.value;
  return lunchEntries.value.slice(0, CARD_LIMIT);
});

const visiblePortions = computed(() => {
  if (isPhone.value || portionsOpen.value) return portions;
  return portions.slice(0, CARD_LIMIT);
});

const lunchHasMore = computed(
  () => !isPhone.value && lunchEntries.value.length > CARD_LIMIT,
);
const portionsHasMore = computed(
  () => !isPhone.value && portions.length > CARD_LIMIT,
);

function orderLink(item) {
  return whatsappLink(`Olá! Quero pedir ${item.name} na Parada Teixeiras.`);
}

function askLink(current) {
  return whatsappLink(
    `Olá! Quais são as opções de prato da ${current.askDay} na Parada Teixeiras?`,
  );
}

function selectDay(id) {
  fromEdge.value = 0;
  dayId.value = id;
}

function stepDay(direction) {
  const index = lunchDays.findIndex((item) => item.id === dayId.value);
  const next = (index + direction + lunchDays.length) % lunchDays.length;
  fromEdge.value = direction;
  dayId.value = lunchDays[next].id;
}

function edges(el) {
  const max = Math.max(0, el.scrollWidth - el.clientWidth);
  return {
    start: el.scrollLeft <= 8,
    end: el.scrollLeft >= max - 8,
  };
}

function scrollTrack(el, direction) {
  if (!el) return "missing";
  const edge = edges(el);
  if (direction < 0 && edge.start) return "edge";
  if (direction > 0 && edge.end) return "edge";
  const card = el.querySelector(".dish");
  const amount = (card?.offsetWidth || el.clientWidth * 0.86) + 14;
  el.scrollBy({ left: direction * amount, behavior: "smooth" });
  return "scrolled";
}

function scrollLunches(direction) {
  const result = scrollTrack(lunchTrack.value, direction);
  if (result === "edge" && isPhone.value) stepDay(direction);
}

function scrollPortions(direction) {
  scrollTrack(portionTrack.value, direction);
}

function onLunchTouchStart(event) {
  const el = lunchTrack.value;
  if (!el) return;
  const edge = edges(el);
  const touch = event.changedTouches[0];
  gesture = {
    x: touch.clientX,
    y: touch.clientY,
    start: edge.start,
    end: edge.end,
  };
}

function onLunchTouchEnd(event) {
  if (!gesture || !isPhone.value) return;
  const touch = event.changedTouches[0];
  const dx = touch.clientX - gesture.x;
  const dy = touch.clientY - gesture.y;
  const snapshot = gesture;
  gesture = null;
  if (Math.abs(dx) < 56 || Math.abs(dx) < Math.abs(dy)) return;
  if (dx < 0 && snapshot.end) stepDay(1);
  else if (dx > 0 && snapshot.start) stepDay(-1);
}

async function alignTrack() {
  await nextTick();
  const el = lunchTrack.value;
  const edge = fromEdge.value;
  fromEdge.value = 0;
  if (el) {
    el.scrollLeft = edge < 0 ? el.scrollWidth : 0;
  }
  const scroller = dayTabs.value;
  const tab = scroller?.querySelector(".is-on");
  if (!scroller || !tab) return;
  const scrollerBox = scroller.getBoundingClientRect();
  const tabBox = tab.getBoundingClientRect();
  const delta =
    tabBox.left - scrollerBox.left - (scrollerBox.width - tabBox.width) / 2;
  scroller.scrollTo({ left: scroller.scrollLeft + delta, behavior: "smooth" });
}

watch(dayId, () => {
  lunchOpen.value = false;
  alignTrack();
});

function onPhoneChange(event) {
  isPhone.value = event.matches;
}

onMounted(() => {
  phoneMedia = window.matchMedia(PHONE_QUERY);
  phoneMedia.addEventListener("change", onPhoneChange);
  alignTrack();
});

onBeforeUnmount(() => {
  phoneMedia?.removeEventListener("change", onPhoneChange);
});
</script>

<template>
  <section id="cardapio" class="band">
    <v-container>
      <div class="menu-head">
        <SectionHeading
          eyebrow="Cardápio"
          script="Escolha seu favorito"
          title="NOSSOS PRATOS"
        />
        <p class="price-seal">
          <span>Pratos</span>
          <em>a partir de</em>
          <strong>R$19,90</strong>
        </p>
      </div>

      <div class="menu-block">
        <!-- <header class="menu-kicker">
          <p class="script">Almoço</p>
          <h3 class="display">PRATOS DO DIA</h3>
        </header> -->
        <p class="menu-note">
          Segunda, quarta, sexta e sábado seguem com pratos fixos. Na terça e na
          quinta, duas opções mudam.
        </p>

        <div
          ref="dayTabs"
          class="filters"
          role="tablist"
          aria-label="Dias do almoço"
        >
          <button
            v-for="item in lunchDays"
            :key="item.id"
            class="filter-btn"
            :class="{ 'is-on': dayId === item.id }"
            type="button"
            role="tab"
            :aria-selected="dayId === item.id"
            @click="selectDay(item.id)"
          >
            {{ item.label }}
          </button>
        </div>

        <p class="day-current">{{ day.full }}</p>

        <div class="dish-scroller">
          <div
            ref="lunchTrack"
            class="dish-grid"
            role="tabpanel"
            :aria-label="day.full"
            tabindex="0"
            @touchstart.passive="onLunchTouchStart"
            @touchend="onLunchTouchEnd"
          >
            <template v-for="entry in visibleLunches" :key="entry.id">
              <article v-if="entry.type === 'ask'" class="dish dish-ask">
                <div class="dish-media">
                  <v-icon icon="mdi-calendar-question" size="46" />
                </div>
                <div class="dish-body">
                  <span class="dish-tag">Terças e Quintas</span>
                  <h3>Pratos especiais do dia</h3>
                  <p>
                    Além das opções fixas do cardápio, temos dois pratos
                    especiais que variam a cada terça e quinta-feira.
                  </p>
                  <a
                    class="dish-wa"
                    :href="askLink(day)"
                    target="_blank"
                    rel="noopener"
                    :aria-label="`Perguntar no WhatsApp as opções de ${day.askDay}`"
                  >
                    <v-icon icon="mdi-whatsapp" size="18" />
                    Consultar pratos de hoje
                  </a>
                </div>
              </article>

              <article
                v-else
                class="dish"
                :class="{ 'is-featured': entry.item.featured }"
              >
                <div class="dish-media">
                  <img
                    v-if="entry.item.image"
                    :src="entry.item.image"
                    :alt="entry.item.name"
                    :style="{
                      objectPosition: entry.item.imagePosition,
                      transform: `scale(${entry.item.zoom || 1})`,
                      transformOrigin: entry.item.imagePosition,
                    }"
                  />
                  <v-icon v-else :icon="entry.item.icon" size="46" />
                  <span v-if="entry.item.badge" class="badge dish-badge">{{
                    entry.item.badge
                  }}</span>
                </div>
                <div class="dish-body">
                  <span class="dish-tag">{{ entry.item.tag }}</span>
                  <h3>{{ entry.item.name }}</h3>
                  <p>{{ entry.item.description }}</p>
                  <a
                    class="dish-wa"
                    :href="orderLink(entry.item)"
                    target="_blank"
                    rel="noopener"
                    :aria-label="`Pedir ${entry.item.name} pelo WhatsApp`"
                  >
                    <v-icon icon="mdi-whatsapp" size="18" />
                    Quero este prato
                  </a>
                </div>
              </article>
            </template>
          </div>

          <div class="dish-nav">
            <button
              type="button"
              aria-label="Dia ou prato anterior"
              @click="scrollLunches(-1)"
            >
              <v-icon icon="mdi-chevron-left" />
            </button>
            <button
              type="button"
              aria-label="Próximo dia ou prato"
              @click="scrollLunches(1)"
            >
              <v-icon icon="mdi-chevron-right" />
            </button>
          </div>
          <p class="day-hint">
            Deslize os pratos. No final, passa para o próximo dia.
          </p>
        </div>

        <button
          v-if="lunchHasMore"
          class="see-more"
          type="button"
          @click="lunchOpen = !lunchOpen"
        >
          {{ lunchOpen ? "Ver menos" : "Ver mais" }}
          <v-icon
            :icon="lunchOpen ? 'mdi-chevron-up' : 'mdi-chevron-down'"
            size="18"
          />
        </button>
      </div>

      <div id="porcoes" class="menu-block">
        <header class="menu-kicker">
          <p class="script">Para a mesa</p>
          <h3 class="display">PORÇÕES E LANCHES</h3>
        </header>
        <p class="menu-note">
          Porções, lanches e outras opções da casa, sem mudar conforme o dia.
        </p>

        <div class="dish-scroller">
          <div
            ref="portionTrack"
            class="dish-grid"
            role="region"
            aria-label="Porções e lanches"
            tabindex="0"
          >
            <article
              v-for="item in visiblePortions"
              :key="item.id"
              class="dish"
              :class="{ 'is-featured': item.featured }"
            >
              <div class="dish-media">
                <img
                  v-if="item.image"
                  :src="item.image"
                  :alt="item.name"
                  :style="{
                    objectPosition: item.imagePosition,
                    transform: `scale(${item.zoom || 1})`,
                    transformOrigin: item.imagePosition,
                  }"
                />
                <v-icon v-else :icon="item.icon" size="46" />
                <span v-if="item.badge" class="badge dish-badge">{{
                  item.badge
                }}</span>
              </div>
              <div class="dish-body">
                <span class="dish-tag">{{ item.tag }}</span>
                <h3>{{ item.name }}</h3>
                <p>{{ item.description }}</p>
                <a
                  class="dish-wa"
                  :href="orderLink(item)"
                  target="_blank"
                  rel="noopener"
                  :aria-label="`Pedir ${item.name} pelo WhatsApp`"
                >
                  <v-icon icon="mdi-whatsapp" size="18" />
                  Quero este prato
                </a>
              </div>
            </article>
          </div>

          <div class="dish-nav">
            <button
              type="button"
              aria-label="Porção anterior"
              @click="scrollPortions(-1)"
            >
              <v-icon icon="mdi-chevron-left" />
            </button>
            <button
              type="button"
              aria-label="Próxima porção"
              @click="scrollPortions(1)"
            >
              <v-icon icon="mdi-chevron-right" />
            </button>
          </div>
        </div>

        <button
          v-if="portionsHasMore"
          class="see-more"
          type="button"
          @click="portionsOpen = !portionsOpen"
        >
          {{ portionsOpen ? "Ver menos" : "Ver mais" }}
          <v-icon
            :icon="portionsOpen ? 'mdi-chevron-up' : 'mdi-chevron-down'"
            size="18"
          />
        </button>
      </div>
    </v-container>
  </section>
</template>
