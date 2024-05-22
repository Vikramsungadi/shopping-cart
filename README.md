### Pseudocode for Shopping Cart Application

```javascript
// Function to create an HTML element
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

DummyProductData = {
        "id": id,
        "image": image,
        "title": title,
        "vendor": vendor,
        "price": price,
        "compare_at_price": compare_at_price,
        "badge_text": badge_text,
        "quantity": 1
    }
// Function to add a product to the cart
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

// Function to remove a product from the cart
Function removeFromCart(cart, productId)
    For i from 0 to length(cart) - 1
        If cart[i].id == productId
            Remove cart[i] from cart
            Break
        End If
    End For
    Return cart
End Function

// Function to calculate total price
Function calculateTotalPrice(cart)
    totalPrice = 0
    For i from 0 to length(cart) - 1
        totalPrice = totalPrice + (cart[i].price * cart[i].quantity)
    End For
    Return totalPrice
End Function

// Function to calculate average price
Function calculateAveragePrice(cart)
    Return length(cart) == 0 ? 0 : calculateTotalPrice(cart) / length(cart)
End Function

// Function to filter products by price
Function filterProducts(cart, priceThreshold)
    filteredProducts = []
    For i from 0 to length(cart) - 1
        If cart[i].price <= priceThreshold
            Append cart[i] to filteredProducts
        End If
    End For
    Return filteredProducts
End Function

// Function to sort the cart by price
Function sortCart(cart, order)
    If order == "asc"
        Sort cart by price in ascending order
    Else If order == "desc"
        Sort cart by price in descending order
    End If
    Return cart
End Function

// Function to clear the cart
Function clearCart()
    cart = []
    Print "Your cart is empty"
    Return cart
End Function

