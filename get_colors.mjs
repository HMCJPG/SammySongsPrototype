import getColors from 'get-image-colors';

const imagePath = './public/assets/images/sample color scheme.png';

getColors(imagePath).then(colors => {
    console.log('Dominant Colors:', colors.map(color => color.hex()));
}).catch(err => {
    console.error('Error:', err);
});
