<script setup>
import { reactive, ref } from 'vue'
import { site, whatsappLink } from '../data/site'
import SectionHeading from './SectionHeading.vue'

const form = reactive({
  nome: '',
  telefone: '',
  mensagem: '',
})

const error = ref('')

function send() {
  if (!form.nome.trim() || !form.mensagem.trim()) {
    error.value = 'Conta seu nome e a mensagem para a gente te responder.'
    return
  }

  error.value = ''
  const mensagem = form.mensagem.trim().replace(/[.!?]+$/, '')
  const text = [
    `Olá, Parada Teixeiras! Meu nome é ${form.nome.trim()}.`,
    `${mensagem}.`,
    form.telefone.trim() ? `Meu telefone: ${form.telefone.trim()}.` : '',
  ]
    .filter(Boolean)
    .join(' ')

  window.open(whatsappLink(text), '_blank', 'noopener')
}
</script>

<template>
  <section id="contato" class="band band-alt">
    <v-container>
      <div class="contact-layout">
        <div>
          <SectionHeading
            align="left"
            eyebrow="Fale com a casa"
            script="Estamos por aqui"
            title="Entre em contato"
            lede="Pedido, aluguel de domingo ou uma dúvida sobre o cardápio. Chama no WhatsApp que a gente responde."
          />
          <p class="hero-copy" style="margin-top: 0">
            <strong style="color: white">{{ site.phoneDisplay }}</strong><br />
            {{ site.addressLine }}, {{ site.city }}
          </p>
        </div>

        <form class="contact-form" @submit.prevent="send">
          <v-theme-provider theme="paradaLight">
            <v-text-field
              v-model="form.nome"
              label="Seu nome"
              variant="solo"
              bg-color="white"
              hide-details
              autocomplete="name"
            />
            <v-text-field
              v-model="form.telefone"
              label="Telefone"
              variant="solo"
              bg-color="white"
              hide-details
              autocomplete="tel"
              style="margin-top: 12px"
            />
            <v-textarea
              v-model="form.mensagem"
              label="Mensagem"
              variant="solo"
              bg-color="white"
              rows="4"
              hide-details
              style="margin-top: 12px"
            />
          </v-theme-provider>
          <p v-if="error" class="form-error" role="alert">{{ error }}</p>
          <v-btn class="btn-gold" type="submit" elevation="0" size="large">
            <v-icon icon="mdi-whatsapp" start />
            Enviar pelo WhatsApp
          </v-btn>
        </form>
      </div>
    </v-container>
  </section>
</template>
