import Api from '@/services/Api'

export default {
  index () {
    return Api().get('chats')
  },

  post (data) {
    return Api().post('chats', data)
  }

}
