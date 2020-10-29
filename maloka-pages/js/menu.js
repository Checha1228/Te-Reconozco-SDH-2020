const menu=`<div>
<ul class="submenu--category">
    <li class="submenu--category-item">
        <a class="button--item" href="./maloka-pages/oficina-liquidacion.html">Oficina de Liquidación​</a>
    </li>
    <li class="submenu--category-item">
        <a class="button--item" href="./maloka-pages/direccion-distrital.html">Dirección distrital de contabilidad</a>
    </li>
    <li class="submenu--category-item">
        <a class="button--item" href="./maloka-pages/direccion-finanzas.html">Dirección de finanzas distritales</a>
    </li>
    <li class="submenu--category-item">
        <a class="button--item" href="./maloka-pages/oficina-control.html">Oficina de control de recaudo tributario</a>
    </li>
    <li class="submenu--category-item">
        <a class="button--item" href="./maloka-pages/direccion-estadistica.html">Dirección de estadística y estudios fiscales</a>
    </li>
    <li class="submenu--category-item">
        <a class="button--item" href="./maloka-pages/subdireccion-asuntos.html">Subdirección de asuntos contractuales</a>
    </li>
    <li class="submenu--category-item">
        <a class="button--item" href="./maloka-pages/direccion-impuestos.html">Dirección de impuestos de Bogotá</a>
    </li>

</ul>
</div>`;

document.addEventListener('DOMContentLoaded',async function() {

    document.getElementById("sub-menu").innerHTML=menu;

})