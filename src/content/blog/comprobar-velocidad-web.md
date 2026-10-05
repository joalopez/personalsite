---
title: 'Comprobá vos mismo la velocidad de tu web (tutorial con PageSpeed Insights y Lighthouse)'
description: 'Aprendé a medir la velocidad de tu página en dos minutos con PageSpeed Insights o Lighthouse, entender las métricas clave y saber si tu web le está costando clientes.'
pubDate: 2026-10-31
draft: true
tags: ['Velocidad', 'Tutorial', 'SEO', 'Rendimiento']
faqs:
  - pregunta: '¿Qué puntaje de PageSpeed es bueno?'
    respuesta: 'Verde (90 a 100) es una web rápida; amarillo (50 a 89) hay cosas para mejorar; rojo (0 a 49) está lenta y estás perdiendo clientes. Mirá siempre primero el puntaje Móvil.'
  - pregunta: '¿Por qué el puntaje cambia entre pruebas?'
    respuesta: 'El resultado varía un poco en cada medición. Medí dos o tres veces y quedate con el comportamiento general, no con un número exacto.'
  - pregunta: '¿Qué hago si da en rojo?'
    respuesta: 'Casi siempre tiene arreglo: revisar los plugins de WordPress, optimizar las imágenes, mejorar el hosting y sacar scripts de terceros que bloquean la carga.'
  - pregunta: '¿PageSpeed y Lighthouse dan lo mismo?'
    respuesta: 'Lighthouse es el motor que usa PageSpeed y sirve para medir un sitio que todavía no publicaste. Los informes son muy parecidos.'
---

**Respuesta corta:** entrá a `pagespeed.web.dev`, pegá la dirección de tu página y tocá "Analizar". En menos de un minuto tenés un puntaje de 0 a 100 y las métricas que importan. Si da menos de 90 en la solapa **Móvil**, tu web está perdiendo visitantes y clientes. Más abajo te explico cómo leerlo y qué hacer.

La velocidad de tu web no es un detalle técnico: es lo primero que siente el visitante y algo que Google tiene en cuenta para posicionarte. La buena noticia es que podés medirla vos mismo, gratis y sin instalar nada.

## Opción fácil: PageSpeed Insights

Es la herramienta oficial de Google y funciona desde el navegador.

1. Entrá a **`pagespeed.web.dev`**.
2. Pegá la dirección de tu página (por ejemplo `https://tunegocio.com.ar`) y tocá **Analizar**.
3. Esperá unos segundos. Arriba te van a aparecer dos puntajes: **Móvil** y **Computadora**.

### Cómo leer el puntaje

El número va de 0 a 100 y se interpreta así:

| Puntaje | Color | Qué significa |
| --- | --- | --- |
| 90 a 100 | Verde | La web está rápida |
| 50 a 89 | Amarillo | Hay cosas para mejorar |
| 0 a 49 | Rojo | Está lenta: estás perdiendo clientes |

**Mirá siempre primero el puntaje Móvil.** La mayoría de la gente que entra a tu web lo hace desde el celular y con datos móviles, así que ese número es el que más te representa. Si ahí estás en rojo o amarillo bajo, es el problema a resolver.

## Qué significan las métricas (en criollo)

Debajo del puntaje vas a ver nombres en inglés. Estos son los tres que importan:

- **LCP (velocidad de carga):** cuánto tarda en verse lo principal de la página: el título, la foto grande, el contenido. Si tarda más de 2,5 segundos, ya estás perdiendo gente.
- **INP (respuesta):** qué tan rápido reacciona la página cuando tocás un botón o un enlace. Si se siente que "no responde", este número es el culpable.
- **CLS (estabilidad visual):** si las cosas se mueven mientras carga (por ejemplo, tocás un botón y justo se corre porque apareció un cartel). Un número bajo significa que la página se queda quieta.

No hace falta memorizarlos: PageSpeed te marca en verde, amarillo o rojo cada uno y te da recomendaciones concretas para mejorarlos.

## Opción técnica: Lighthouse en Chrome

Lighthouse es el motor que usa PageSpeed, pero disponible dentro de tu navegador. Sirve si querés más detalle o probar una versión antes de publicarla.

1. Abrí tu web en **Chrome**.
2. Tocá `F12` (o clic derecho → **Inspeccionar**) para abrir las herramientas de desarrollador.
3. Andá a la pestaña **Lighthouse**.
4. Dejá marcada la categoría **Rendimiento** y elegí **Móvil**.
5. Tocá **Analizar carga de página**.

En un momento te da un informe muy parecido al de PageSpeed. La ventaja es que podés correrlo sobre un sitio que todavía no está publicado (en tu computadora) y comparar cambios al instante.

## Consejos para que la medición sirva

El resultado **varía un poco entre pruebas**, así que no te cases con el primer número:

- Medí **dos o tres veces** y quedate con el comportamiento general, no con un punto exacto.
- Hacelo en **modo incógnito** para que las extensiones no ensucien la medición.
- Probá **móvil y computadora**: casi siempre el celular da peor y es el que más importa.
- Compará **tu web con la de un competidor**: si el suyo carga en un segundo y el tuyo en seis, ahí está la diferencia.

## ¿Y si el número da mal?

Primero respirá: casi siempre tiene arreglo y no hace falta rediseñar todo. Las causas más comunes son:

- **WordPress con muchos plugins**, que suman scripts y peso a cada página.
- **Imágenes gigantes** sin optimizar (fotos de 4 MB que se ven del mismo tamaño).
- **Hosting lento o compartido**, que tarda en responder.
- **Scripts de terceros** (chats, mapas, trackers) que bloquean la carga.

Si tu web es un WordPress viejo y lento, el camino más directo no es parchear: es pasar a un sitio moderno y estático que carga al instante. De eso me encargo en la [migración desde WordPress](/servicios/migracion-wordpress).

## Conclusión

Medir la velocidad de tu web te lleva dos minutos y te da algo que ninguna opinión reemplaza: un dato. Hacelo hoy, compará el móvil y, si el número no convence, tenés el primer paso para dejar de perder visitantes que ya te estaban buscando.

**¿Mediste tu web y el resultado no te gustó?** Escribime y te hago un diagnóstico gratis: te digo por qué está lenta y qué haría falta para que cargue al instante.
