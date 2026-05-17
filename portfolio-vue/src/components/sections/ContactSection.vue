<template>
  <section id="contact" class="s-contact ss-dark target-section">
    <div class="row contact-main" data-aos="fade-up">
      <div class="column large-full">
        <p class="section-desc">
          Envoyez-moi un mail pour collaborer !
          <a :href="`mailto:${profile.email}`">{{ profile.email }}</a>.
        </p>
      </div>
    </div>

    <div class="row contact-infos" data-aos="fade-up" data-aos-anchor=".contact-main">
      <div class="column large-5 medium-full contact-phone">
        <h4><a :href="`tel:${profile.phone}`">Appelez-moi</a></h4>
      </div>

      <div class="column large-7 medium-full contact-social">
        <h4>Social</h4>
        <ul>
          <li v-for="s in social" :key="s.name">
            <a :href="s.url" target="_blank" rel="noopener" :aria-label="s.name">
              <i :class="s.icon" aria-hidden="true"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>

    <!-- Formulaire de contact -->
    <div class="row contact-form-wrap" data-aos="fade-up">
      <div class="column large-full">
        <h3 class="contact-form-title">Envoyer un message</h3>
        <form class="contact-form" @submit.prevent="sendMessage">
          <div class="contact-form__row">
            <div class="contact-form__field">
              <label for="cf-name">Nom</label>
              <input
                id="cf-name"
                v-model="form.name"
                type="text"
                placeholder="Votre nom"
                required
              />
            </div>
            <div class="contact-form__field">
              <label for="cf-email">Email</label>
              <input
                id="cf-email"
                v-model="form.email"
                type="email"
                placeholder="votre@email.com"
                required
              />
            </div>
          </div>
          <div class="contact-form__field">
            <label for="cf-subject">Sujet</label>
            <input
              id="cf-subject"
              v-model="form.subject"
              type="text"
              placeholder="Sujet du message"
              required
            />
          </div>
          <div class="contact-form__field">
            <label for="cf-message">Message</label>
            <textarea
              id="cf-message"
              v-model="form.message"
              rows="6"
              placeholder="Votre message..."
              required
            ></textarea>
          </div>

          <div class="contact-form__footer">
            <button type="submit" class="btn btn--primary" :disabled="status === 'sending'">
              <span v-if="status === 'sending'">Envoi en cours…</span>
              <span v-else>Envoyer le message</span>
            </button>
            <p v-if="status === 'success'" class="contact-form__feedback contact-form__feedback--success">
              Message envoyé avec succès !
            </p>
            <p v-if="status === 'error'" class="contact-form__feedback contact-form__feedback--error">
              Une erreur s'est produite. Réessayez ou écrivez directement à {{ profile.email }}.
            </p>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import emailjs from '@emailjs/browser'

const props = defineProps({
  profile: Object,
  social: Array
})

const EMAILJS_SERVICE_ID  = 'service_fsyhhz8'
const EMAILJS_TEMPLATE_ID = 'template_cwdumc7'
const EMAILJS_PUBLIC_KEY  = 'EgRowjViZaFtbzUll'

const form = ref({ name: '', email: '', subject: '', message: '' })
const status = ref('')

async function sendMessage() {
  status.value = 'sending'
  try {
    await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      {
        from_name:    form.value.name,
        from_email:   form.value.email,
        subject:      form.value.subject,
        message:      form.value.message,
        to_email:     props.profile.email,
      },
      EMAILJS_PUBLIC_KEY
    )
    status.value = 'success'
    form.value = { name: '', email: '', subject: '', message: '' }
  } catch {
    status.value = 'error'
  }
}
</script>

<style scoped>
.contact-form-wrap {
  margin-top: 6rem;
}

.contact-form-title {
  font-size: 2.4rem;
  color: #ffffff;
  margin-bottom: 3rem;
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.contact-form__row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
}

.contact-form__field {
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
}

.contact-form__field label {
  font-size: 1.3rem;
  font-weight: 600;
  color: #aaaaaa;
  text-transform: uppercase;
  letter-spacing: 0.08em;
}

.contact-form__field input,
.contact-form__field textarea {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 6px;
  color: #ffffff !important;
  font-size: 1.5rem;
  padding: 1.2rem 1.6rem;
  transition: border-color 0.2s ease;
  outline: none;
  resize: vertical;
  font-family: inherit;
}

.contact-form__field input::placeholder,
.contact-form__field textarea::placeholder {
  color: #555555;
}

.contact-form__field input:focus,
.contact-form__field textarea:focus {
  border-color: #cf1767;
}

.contact-form__footer {
  display: flex;
  align-items: center;
  gap: 2rem;
  flex-wrap: wrap;
}

.contact-form__feedback {
  font-size: 1.4rem;
  margin: 0;
}

.contact-form__feedback--success {
  color: #4caf50;
}

.contact-form__feedback--error {
  color: #cf1767;
}

@media (max-width: 600px) {
  .contact-form__row {
    grid-template-columns: 1fr;
  }
}
</style>
