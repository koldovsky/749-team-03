
    document.querySelector('button.image1').onclick = () => {
    basicLightbox.create(`<img  src="img/carousel1.png">`).show();
};
    document.querySelector('button.image2').onclick = () => {
    basicLightbox.create(`<img  src="img/carousel2.jfif">`).show();
};
    document.querySelector('button.image3').onclick = () => {
    basicLightbox.create(`<img  src="img/carousel3.png">`).show();
};
    document.querySelector('button.image4').onclick = () => {
    basicLightbox.create(`<img  src="img/carousel4.png">`).show();
};
    document.querySelector('button.image5').onclick = () => {
    basicLightbox.create(`<img  src="img/carousel5.jfif">`).show();
};

    document.querySelector('button.callbacks').onclick = () => {

    const html = `
		<h1>Callbacks</h1>
		<p>Take a look at the console of your browser.<br>This lightbox will close automaticly to demonstrate the close-callback.</p>
	`;

    const instance = basicLightbox.create(html, {
    onShow: instance => console.log('onShow', instance),
    onClose: instance => console.log('onClose', instance)
});


    instance.show(instance => console.log('finished show()', instance));

    setTimeout(() => {
    instance.close(instance => console.log('finished close()', instance));
}, 3000);

};

    document.querySelector('button.blocked').onclick = () => {

    const html = `
		<h1>Blocked</h1>
		<p>It's not possible to close this lightbox,<br>because the onClose function returns false.</p>
	`;

    basicLightbox.create(html, {
    onClose: () => false
}).show();

};


    document.querySelector('button.notClosable').onclick = () => {

    const html = `
		<h1>Not closable</h1>
		<p>It's not possible to close this lightbox with a click.</p>
	`;

    basicLightbox.create(html, {
    closable: false
}).show();

};

    document.querySelector('button.modify').onclick = () => {

    const instance = basicLightbox.create(`
		<h1>Modify HTML</h1>
		<p>You can modify the HTML of the lightbox using JS.</p>
	`);

    instance.element().insertAdjacentHTML('afterbegin', '<p>Before placeholder</p>');
    instance.element().insertAdjacentHTML('beforeend', '<p>After placeholder</p>');

    instance.show();

};

    document.querySelector('button.classNames').onclick = () => {

    const html = `
		<h1>Custom classNames</h1>
		<p>You can add custom classNames to the lightbox element.</p>
	`;

    basicLightbox.create(html, {
    className: 'classNames one two three'
}).show();

};

    const stack = () => {

    const html = `<button>Open another lightbox</button>`;
    const instance = basicLightbox.create(html);

    instance.element().querySelector('button').onclick = stack;
    instance.show();

};

    document.querySelector('button.stack').onclick = stack;

