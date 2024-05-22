START

Function createElem(tag, attributes = {}, textContent = '', children = [])
    elem = document.createElement(tag)
    For each attribute in attributes
        elem.setAttribute(attribute, attributes[attribute])
    End For
    elem.textContent = textContent
    For each child in children
        If child is not null or undefined
            elem.appendChild(child)
        End If
    End For
    Return elem
End Function

Function createProduct(id, image, title, vendor, price, compare_at_price, badge_text)
    product = {
        "id": id,
        "image": image,
        "title": title,
        "vendor": vendor,
        "price": price,
        "compare_at_price": compare_at_price,
        "badge_text": badge_text,
        "quantity": 1
    }
    Return product
End Function

Function addToCart(cart, product)
    For i from 0 to length(cart) - 1
        If cart[i].id == product.id
            cart[i].quantity = cart[i].quantity + 1
            Break
        End If
    End For
    If NOT found
        Append product to cart
    End If
    Return cart
End Function

Function removeFromCart(cart, productId)
    For i from 0 to length(cart) - 1
        If cart[i].id == productId
            Remove cart[i] from cart
            Break
        End If
    End For
    Return cart
End Function

Function calculateTotalPrice(cart)
    totalPrice = 0
    For i from 0 to length(cart) - 1
        totalPrice = totalPrice + (cart[i].price * cart[i].quantity)
    End For
    Return totalPrice
End Function

Function calculateAveragePrice(cart)
    If length(cart) == 0
        Return 0
    End If
    totalPrice = calculateTotalPrice(cart)
    Return totalPrice / length(cart)
End Function

Function filterProducts(cart, priceThreshold)
    filteredProducts = []
    For i from 0 to length(cart) - 1
        If cart[i].price <= priceThreshold
            Append cart[i] to filteredProducts
        End If
    End For
    Return filteredProducts
End Function

Function sortCart(cart, order)
    If order == "asc"
        Sort cart by price in ascending order
    Else If order == "desc"
        Sort cart by price in descending order
    End If
    Return cart
End Function

Function clearCart()
    cart = []
    Print "Your cart is empty"
    Return cart
End Function

product1 = createProduct('1', './assets/shirt-1.webp', 'Product 1', 'Vendor 1', 500, 1000, 'New')
cart = addToCart(cart, product1)

END
