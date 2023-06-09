import axios from "axios"
const davepetboticsAPI = axios.create({
  baseURL: "https://davepetbotics-41310.botics.co",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
function api_v1_pet_list(payload) {
  return davepetboticsAPI.get(`/api/v1/pet/`)
}
function api_v1_pet_create(payload) {
  return davepetboticsAPI.post(`/api/v1/pet/`, payload.data)
}
function api_v1_login_create(payload) {
  return davepetboticsAPI.post(`/api/v1/login/`, payload.data)
}
function api_v1_signup_create(payload) {
  return davepetboticsAPI.post(`/api/v1/signup/`, payload.data)
}
function rest_auth_user_retrieve(payload) {
  return davepetboticsAPI.get(`/rest-auth/user/`)
}
function rest_auth_user_update(payload) {
  return davepetboticsAPI.put(`/rest-auth/user/`, payload.data)
}
function rest_auth_user_partial_update(payload) {
  return davepetboticsAPI.patch(`/rest-auth/user/`, payload.data)
}
function api_docs_schema_retrieve(payload) {
  return davepetboticsAPI.get(`/api-docs/schema/`, {
    params: { lang: payload.lang }
  })
}
function api_v1_pet_retrieve(payload) {
  return davepetboticsAPI.get(`/api/v1/pet/${payload.id}/`)
}
function api_v1_pet_update(payload) {
  return davepetboticsAPI.put(`/api/v1/pet/${payload.id}/`, payload.data)
}
function api_v1_pet_partial_update(payload) {
  return davepetboticsAPI.patch(`/api/v1/pet/${payload.id}/`, payload.data)
}
function api_v1_pet_destroy(payload) {
  return davepetboticsAPI.delete(`/api/v1/pet/${payload.id}/`)
}
function rest_auth_login_create(payload) {
  return davepetboticsAPI.post(`/rest-auth/login/`, payload.data)
}
function rest_auth_logout_retrieve(payload) {
  return davepetboticsAPI.get(`/rest-auth/logout/`)
}
function rest_auth_logout_create(payload) {
  return davepetboticsAPI.post(`/rest-auth/logout/`)
}
function rest_auth_registration_create(payload) {
  return davepetboticsAPI.post(`/rest-auth/registration/`, payload.data)
}
function rest_auth_password_reset_create(payload) {
  return davepetboticsAPI.post(`/rest-auth/password/reset/`, payload.data)
}
function rest_auth_password_change_create(payload) {
  return davepetboticsAPI.post(`/rest-auth/password/change/`, payload.data)
}
function rest_auth_password_reset_confirm_create(payload) {
  return davepetboticsAPI.post(
    `/rest-auth/password/reset/confirm/`,
    payload.data
  )
}
function rest_auth_registration_verify_email_create(payload) {
  return davepetboticsAPI.post(
    `/rest-auth/registration/verify-email/`,
    payload.data
  )
}
export const apiService = {
  api_v1_pet_list,
  api_v1_pet_create,
  api_v1_login_create,
  api_v1_signup_create,
  rest_auth_user_retrieve,
  rest_auth_user_update,
  rest_auth_user_partial_update,
  api_docs_schema_retrieve,
  api_v1_pet_retrieve,
  api_v1_pet_update,
  api_v1_pet_partial_update,
  api_v1_pet_destroy,
  rest_auth_login_create,
  rest_auth_logout_retrieve,
  rest_auth_logout_create,
  rest_auth_registration_create,
  rest_auth_password_reset_create,
  rest_auth_password_change_create,
  rest_auth_password_reset_confirm_create,
  rest_auth_registration_verify_email_create
}
