const menu=`<div>
<ul class="submenu--category">

<li class="submenu--category-item">
    <a class="button--item" href="./index.html">Secciones</a>
</li>

    <li class="submenu--category-item">
        <a class="button--item" href="./reporte-medios-magneticos.html">Reporte de información en medios magnéticos</a>
    </li>
    <li class="submenu--category-item">
        <a class="button--item" href="./impuesto-ica.html">Impuesto ICA</a>
    </li>
    <li class="submenu--category-item">
        <a class="button--item" href="./rst">El régimen simple de tributación (RST)</a>
    </li>
    <li class="submenu--category-item">
        <a class="button--item" href="./entidadesrecaudo.html">Entidades financieras con permisos para recaudar</a>
    </li>
    <li class="submenu--category-item">
        <a class="button--item" href="./reciprocidad.html">Plazos de reciprocidad</a>
    </li>
    <li class="submenu--category-item">
        <a class="button--item" href="./impuestosbenefician.html">“Impuestos que benefician a Bogotá</a>
    </li>

</ul>
</div>`;

document.addEventListener('DOMContentLoaded',async function() {

    document.getElementById("sub-menu").innerHTML=menu;

})
