<template>
    <p>
       {{$route.params | json}}
		<br>
		{{$route.query | json}}
    </p>
</template>