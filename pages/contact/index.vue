<template>
  <IToast v-if="saved" v-model="saved" color="success" dismissible>
    <p>Your request has been submitted. Our team will be in touch with you soon.</p>
  </IToast>
  <IContainer>
    <div class="top">
      <h3>Contact</h3>
      <p class="lead">Have a question? I'm here to help!</p>
      <div class="bottom-left-stuff">
        <a href="mailto:hello@poneres.com">
          <img src="~/assets/images/envelope-solid.svg" width="20" alt="email icon" />
          <div>hello@poneres.com</div>
        </a>
        <a href="tel:443-301-9719">
          <img src="~/assets/images/phone-solid.svg" width="20" alt="phone icon" />
          <div>443-301-9719</div>
        </a>
      </div>
    </div>
    <ClientOnly>
      <IForm v-model="schema" @update:modelValue="handleFormUpdate">
        <div v-if="saved" class="form-container">
          <IRow>
            <IColumn>
              <div class="request-sent">
                <p class="lead">Thank you for contacting us!</p>
              </div>
            </IColumn>
          </IRow>
        </div>
        <div v-else class="form-container">
          <IRow>
            <IColumn xs="12" sm="6">
              <IFormGroup required>
                <IFormLabel for="firstName">First name</IFormLabel>
                <IInput name="firstName" autocomplete :error="errorTypes" />
                <IFormError for="firstName" :visible="errorTypes" />
              </IFormGroup>
            </IColumn>
            <IColumn xs="12" sm="6">
              <IFormGroup required>
                <IFormLabel for="lastName">Last name</IFormLabel>
                <IInput name="lastName" autocomplete :error="errorTypes" />
                <IFormError for="lastName" :visible="errorTypes" />
              </IFormGroup>
            </IColumn>
          </IRow>
          <IRow>
            <IColumn xs="12" sm="6">
              <IFormGroup required>
                <IFormLabel for="email">E-mail address</IFormLabel>
                <IInput name="email" autocomplete :error="errorTypes" />
                <IFormError for="email" :visible="errorTypes" />
              </IFormGroup>
            </IColumn>
            <IColumn xs="12" sm="6">
              <IFormGroup required>
                <IFormLabel for="phone">Phone number</IFormLabel>
                <IInput name="phone" autocomplete :error="errorTypes" />
                <IFormError for="phone" :visible="errorTypes" />
              </IFormGroup>
            </IColumn>
          </IRow>
          <IRow>
            <IColumn xs="12">
              <IFormGroup required>
                <IFormLabel for="message">Message</IFormLabel>
                <ITextarea name="message" autocomplete :error="errorTypes" />
                <IFormError for="message" :visible="errorTypes" />
              </IFormGroup>
            </IColumn>
          </IRow>
          <IRow>
            <IColumn>
              <div class="create-request">
                <div>
                  <IButton color="light" size="lg" :loading="saving" @click="submitRequest"
                    :disabled="!schema.touched || schema.invalid">
                    Submit</IButton>
                  <IButton outline color="dark" size="lg" @click="clear" :disabled="saving">
                    Clear</IButton>
                </div>
              </div>
            </IColumn>
          </IRow>
        </div>
      </IForm>
    </ClientOnly>
  </IContainer>
</template>
<script setup>
import { AsYouType } from 'libphonenumber-js'
import { useForm } from "@inkline/inkline/composables";

useHead({
  titleTemplate: "Contact | %s",
});

const runtimeConfig = useRuntimeConfig()
const saving = ref(false);
const saved = ref(false);

const { schema } = useForm({
  email: {
    validators: [
      {
        name: "required",
      },
      {
        name: "custom",
        message: "Please enter a valid email address.",
        validator: emailValidator,
      },
    ],
  },
  firstName: { validators: [{ name: "required" }] },
  lastName: { validators: [{ name: "required" }] },
  phone: {
    validators: [
      { name: "required" },
      {
        name: "custom",
        message: "Please enter a valid phone number",
        validator: (v) => {
          return /\([0-9]{3}\) [0-9]{3}-[0-9]{4}$/.test(v)
        }
      }
    ]
  },
  message: { validators: [{ name: "required" }] },
});

const errorTypes = ["touched", "invalid"];
const successfulSubmission = ref(false);

const handleFormUpdate = async (e) => {
  if (!e.phone.value) {
    return;
  }
  const formatted = new AsYouType('US').input(e.phone.value);
  schema.value.phone.value = formatted
}

const clear = () => {
  schema.value.firstName.value = ''
  schema.value.lastName.value = ''
  schema.value.email.value = ''
  schema.value.phone.value = ''
  schema.value.message.value = ''
}

const submitRequest = async () => {
  saving.value = true;

  await $fetch(`/api/public/contact/request`, {
    baseURL: runtimeConfig.public.apiBase,
    method: "POST",
    mode: 'no-cors',
    headers: {
      'Content-Type': 'x-www-form-urlencoded',
    },
    body: new URLSearchParams({
      'firstName': schema.value.firstName.value,
      'lastName': schema.value.lastName.value,
      'email': schema.value.email.value,
      'phone': schema.value.phone.value,
      'message': schema.value.message.value
    })
  }).then(() => {
    clear();
    saving.value = false;
    saved.value = true;
  });
};
</script>
<style scoped>
.bottom-left-stuff {
  display: flex;
  justify-content: center;
  margin-bottom: 22px;
}

.bottom-left-stuff a {
  justify-content: center;
  margin: 12px;
}

.create-request {
  margin-top: 48px;
  text-align: center;
  margin-bottom: 200px;
}

.create-request button {
  margin: 12px;
  width: 188px;
}

.request-sent {
  text-align: center;
}

.form-container {
  margin: 0 22px;
}

.column {
  margin: 3px 0;
}
</style>
