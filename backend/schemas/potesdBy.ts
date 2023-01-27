//Type reference + to faz uma referencia a tabela de usuários e assim ele sabe que faz a publicação!
export default {
    name: 'postedBy',
    title: 'PostedBy',
    type: 'reference',
    to: [{ type: 'user' }]
}