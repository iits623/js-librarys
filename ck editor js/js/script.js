let btn = document.querySelector('button')
let div = document.querySelector('.show-text')
let text = null

const {
    ClassicEditor,
    Essentials,
    Bold,
    Italic,
    Font,
    Paragraph
} = CKEDITOR;

ClassicEditor
    .create(document.querySelector('#editor'), {
        language: 'fa',
        licenseKey: 'eyJhbGciOiJFUzI1NiJ9.eyJleHAiOjE3NTcyODk1OTksImp0aSI6ImRlMTZjMzNiLTQ3OGItNDE3OC05NDU1LTljYTRmYzViNjFhNyIsInVzYWdlRW5kcG9pbnQiOiJodHRwczovL3Byb3h5LWV2ZW50LmNrZWRpdG9yLmNvbSIsImRpc3RyaWJ1dGlvbkNoYW5uZWwiOlsiY2xvdWQiLCJkcnVwYWwiLCJzaCJdLCJ3aGl0ZUxhYmVsIjp0cnVlLCJsaWNlbnNlVHlwZSI6InRyaWFsIiwiZmVhdHVyZXMiOlsiKiJdLCJ2YyI6IjkxNjhhZTM2In0.Byr4oEy0TzkCx8Kxpx4fSlCm3gi6RDbR6DseZRBTHlB0gCYLel9TUKZ--MULwa0-PtWgATyubv8z0uLjGD8v_g',
        plugins: [Essentials, Bold, Italic, Font, Paragraph],
        toolbar: [
            'undo', 'redo', '|', 'bold', 'italic', '|',
            'fontSize', 'fontFamily', 'fontColor', 'fontBackgroundColor'
        ]
    })
    .then(data => {
        console.log(data)
        text = data
    }
    )
    .catch(err => console.log(err));

btn.addEventListener('click', () => {
    console.log(text.getData());
    div.innerHTML = text.getData()
})