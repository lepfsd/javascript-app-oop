class Product {

    constructor(name, price, year) {
        this.name = name
        this.price = price
        this.year = year
    }
}

class UI {

    addProduct(product) {
        const productList = document.getElementById('products-list')
        const element = document.createElement('div')
        element.innerHTML = `
            <div class="card text-center mb-4">
                <div class="card-body">
                    <strong>product name:</strong> ${product.name}
                    <strong>product price:</strong> ${product.price}
                    <strong>product year:</strong> ${product.year}
                    <a href="#" class="btn btn-danger" name="delete">delete</a>
                </div>
            </div>
        `
        productList.appendChild(element)

    }

    resetForm() {
        document.getElementById('product-form').reset()
    }

    deleteProduct(element) {
        if(element.name === 'delete') {
            element.parentElement.parentElement.parentElement.remove()
        }
    }

    showMessage(message, cssClass) {
        const div = document.createElement('div')
        div.className = `alert alert-${cssClass}`
        div.appendChild(document.createTextNode(message))
        const container = document.querySelector('.container')
        const app = document.querySelector('#App')
        container.insertBefore(div, app)
        setTimeout(function() {
            document.querySelector('.alert').remove()
        }, 3000)
    }
}

// DOM events
document.getElementById('product-form').addEventListener('submit', (e) => {
    const name = document.getElementById('name').value
    const price = document.getElementById('price').value
    const year = document.getElementById('year').value
    
    const product = new Product(name, price, year)

    const ui = new UI()

    if(name === '' || price === '' || year === '') {
        return ui.showMessage('complete fields', 'info')
    }

    ui.addProduct(product)
    ui.resetForm()
    ui.showMessage('product added succesfully', 'success')

    e.preventDefault()
})

document.getElementById('products-list').addEventListener('click', function(e) {

    const ui = new UI()
    ui.deleteProduct(e.target)
    ui.showMessage('product deleted succesfully', 'warning')
})