import emoji from 'react-easy-emoji'

export default input => {
  return emoji(input, {
      baseUrl: '//twemoji.maxcdn.com/2/svg/',
      ext: '.svg',
      size: ''
  })
}