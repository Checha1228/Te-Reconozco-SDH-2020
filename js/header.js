const header=`<nav class="header--challenge">
<div class="content--logo-challenge">
    <img src="../images/img--logo-reto.png" alt="" class="responsive-img">
</div>
<ul class="menu--header">
    <li class="menu--header-items">
        <a href="../index.html">Home</a>
    </li>
    <li class="menu--header-items">
        <a href="">Categorías</a>
        <ul class="submenu--header">
            <li class="submenu--header-items">
                <a href="">Categoría 1</a>
            </li>
            <li class="submenu--header-items">
                <a href="">Categoría 2</a>
            </li>
            <li class="submenu--header-items">
                <a href="">Categoría 3</a>
            </li>
            <li class="submenu--header-items">
                <a href="">Categoría 4</a>
            </li>
        </ul>
    </li>
</ul>
</nav>`;

document.addEventListener('DOMContentLoaded',async function() {

    document.getElementById("header").innerHTML=header;

})