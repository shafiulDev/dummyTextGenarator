const dumyText = [
    'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum',
    'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).',
    'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.',
    'atin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.3',
    'but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isnt anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.',
    'All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always fr',
    'Vestibulum gravida magna feugiat arcu fermentum ultrices. Fusce ullamcorper tristique urna nec mollis. Sed rhoncus felis risus, cursus lobortis lacus tristique quis. Integer congue quam faucibus justo gravida tincidunt. Etiam ultricies tellus at dui porttitor, eget efficitur sapien cursus. Etiam mattis sodales nisi, vitae egestas sem imperdiet vel. Vivamus porta posuere tortor, et euismod libero faucibus vel. Nulla tincidunt aliquet sem, elementum tincidunt felis venenatis vitae. Etiam sagittis justo vitae leo egestas, id consectetur felis blandit. Donec ut vulputate libero, quis commodo nunc.',
    'Donec id convallis lorem, quis viverra nunc. Morbi quis magna vitae massa condimentum viverra. Mauris quis dapibus felis.',
    'Proin augue massa, dapibus in facilisis vitae, porta nec elit. Fusce semper, erat sit amet euismod aliquet, tellus ligula suscipit arcu, sed varius elit ex vitae sapien. In feugiat ultrices gravida. Cras dolor augue, pulvinar in augue vitae, semper ullamcorper ex. Praesent in euismod felis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Integer semper turpis nec augue congue, quis tempor nisl iaculis. Integer scelerisque ipsum sed tellus ultrices rhoncus. Quisque eu tortor ut lacus feugiat egestas et id leo. In venenatis leo vitae enim laoreet, a iaculis leo malesuada. Donec ut volutpat lorem. Integer ac lectus eleifend, aliquam tortor eget, sollicitudin quam. Phasellus id dui in eros luctus condimentum.',
    'Aenean justo nulla, lobortis at odio blandit, porttitor sagittis velit. Nulla sodales lacus lorem, vel aliquet ante porta nec. Fusce eu purus ut ipsum semper faucibus. Nunc bibendum sagittis mi, et consectetur lorem accumsan eu. Mauris eleifend varius ligula, ac mollis augue tempus ut. Duis id dolor diam. Etiam interdum fringilla odio, quis auctor sem tempor ut. Vestibulum risus nisi, maximus ut elit in, condimentum rutrum diam. Aenean gravida ligula sed eros lacinia volutpat. Cras neque justo, ultrices eget maximus ac, mollis id urna. Praesent eget dui egestas, fringilla lorem eu, aliquet quam.',
]
//select all
const myLI = document.getElementById('myLI')
const input = document.getElementById('input')
const genarate = document.getElementById('genarate')
const mainSection = document.getElementById('mainSection')

genarate.addEventListener('click', function (e) {
    let value = parseInt(input.value)

    const random = Math.floor(Math.random() * dumyText.length)

    if (value <= dumyText.length && value > 0) {
        const newLI = document.createElement('li')
        newLI.className = 'list-group-item'

        let sliceResult = dumyText.slice(0, value)


        let myList = sliceResult.map(single => {
           return `<p>${single}</p>`
        }).join('')

        mainSection.innerHTML = myList;


    } else {
        mainSection.innerHTML = `<p>${dumyText[random]}</p>`
    }
})