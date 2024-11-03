<?php 
$products = [
    "Xiaomi UltraTap", "Xiaomi Redmi15", "Xiaomi Folder Flip",
    "Samsung S24 Ultra", "Samsung S23+", "Samsung Flip",
    "Apple IPhone 15 Pro", "Apple IPhone 16", "Apple IPhone 14 ProMax"

];
?>
<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mobile Phones</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <h1>List of phones</h1>
    <div id="product-list">
    <ul>
        <?php foreach ($products as $product): ?>
            <li><?php echo htmlspecialchars($product); ?></li>
        <?php endforeach; ?>
    </ul>
</div>

    <div>
        <button onclick="sortProducts('quick')">Quick sort</button>
        <button onclick="sortProducts('bubble')">Bubble sort</button>
        <button onclick="searchProducts('binary')">Binary search</button>
        <button onclick="searchProducts('linear')">Liner search</button>
        <button onclick="reverseProducts()">Reverse</button>
    </div>

    <script src="./script.js"></script>
</body>
</html>
