function getProducts() {
    const items = Array.from(document.querySelectorAll("#product-list li"));
    return items.map(item => item.textContent);
}

function updateProductList(products) {
    const list = document.getElementById("product-list");
    list.innerHTML = ""; 

    const ul = document.createElement("ul");
    products.forEach(product => {
        const li = document.createElement("li");
        li.textContent = product;
        ul.appendChild(li);
    });

    list.appendChild(ul);
}

function sortProducts(method) {
    let products = getProducts();

    if (method === "quick") {
        products = quickSort(products);
    } else if (method === "bubble") {
        products = bubbleSort(products);
    }

    updateProductList(products);
}

function quickSort(arr) {
    if (arr.length <= 1) return arr;
    const pivot = arr[Math.floor(arr.length / 2)];
    const left = arr.filter(x => x < pivot);
    const right = arr.filter(x => x > pivot);
    return [...quickSort(left), pivot, ...quickSort(right)];
}

function bubbleSort(arr) {
    let n = arr.length;
    let swapped;
    do {
        swapped = false;
        for (let i = 0; i < n - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
                swapped = true;
            }
        }
    } while (swapped);
    return arr;
}

function searchProducts(method) {
    const searchTerm = prompt("Enter name of phone for searching:");
    const products = getProducts();
    let index = -1;

    if (method === "binary") {
        const sortedProducts = quickSort(products);
        index = binarySearch(sortedProducts, searchTerm);
    } else if (method === "linear") {
        index = linearSearch(products, searchTerm);
    }

    if (index !== -1) {
        alert(`Phone "${searchTerm}" is found.`);
    } else {
        alert("Phone isn`t found.");
    }
}

function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (arr[mid] === target) return mid;
        else if (arr[mid] < target) left = mid + 1;
        else right = mid - 1;
    }

    return -1;
}

function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) return i;
    }
    return -1;
}

function reverseProducts() {
    const products = getProducts();
    products.reverse();
    updateProductList(products);
}


