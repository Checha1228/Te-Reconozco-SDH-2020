const menu=`<div>
<ul class="submenu--category">
	<li class="submenu--category-item">
		<a class="button--item" href="./1.html">Plan anticorrupción</a>
	</li>
	<li class="submenu--category-item">
		<a class="button--item" href="./2.html">Tipos de culpas</a>
	</li>
	<li class="submenu--category-item">
		<a class="button--item" href="./3.html">Gravedad de faltas y sanciones</a>
	</li>
	<li class="submenu--category-item">
		<a class="button--item" href="./4.html">Deberes y derechos de los funcionarios</a>
	</li>
	<li class="submenu--category-item">
		<a class="button--item" href="./5.html">Prohibiciones de los funcionarios</a>
	</li>


</ul>
</div>`;

document.addEventListener('DOMContentLoaded',async function() {

    document.getElementById("sub-menu").innerHTML=menu;

})
