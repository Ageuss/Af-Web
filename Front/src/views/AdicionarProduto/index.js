import 'bootstrap/dist/css/bootstrap.css'
import api from '../..//services/api'

export default {
  name: 'AdicionarProduto',
  components: {
  },
  data() {
    return {
      user: [],
      posts: [],
      post: {
        valor: '',
        nome: '',
        descricao: ''
      },
      comment: {
        user_id: '',
        post_id: '',
        body: ''
      }
    }
  },
  methods: {
    insertPost() {
      this.post.user_id = this.user.id
      api.post('/posts', this.post).then((Response) => {
        console.log(Response.data);
      })
      this.$router.go();
    },
    insertComment(id) {
      this.comment.user_id = this.user.id;
      this.comment.post_id = id;
      api.post('/comments', this.comment).then((Response) => {
        console.log(Response.data)
      })
    }
  },
}