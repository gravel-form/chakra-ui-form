(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{"7JGE":function(n,e,t){"use strict";t.r(e);var o=t("q1tI"),r=t("xS4D"),a=o.createElement;e.default=function(){return a(r.a,{code:"const schema = {\n  title: 'Demo of all available widgets',\n  type: 'object',\n  properties: {\n    input: { type: 'string' },\n    textarea: { type: 'string' },\n    number: { type: 'number' },\n    slider: { type: 'integer', minimum: 0, maximum: 100 },\n    select: {\n      type: 'string',\n      enum: ['foo', 'bar', 'baz'],\n    },\n    radioGroup: {\n      type: 'string',\n      enum: ['foo', 'bar', 'baz'],\n    },\n    checkbox: { type: 'boolean',title: 'Accepted' },\n    switch: { type: 'boolean' },\n    checkboxGroup: {\n      type: 'array',\n      items: {\n        type: 'string',\n        enum: ['foo', 'bar', 'baz'],\n      },\n      uniqueItems: true,\n    },\n  },\n};\n\nconst extraProps = {\n  properties: {\n    textarea: { component: 'TextArea' },\n    slider: { component: 'Slider' },\n    radioGroup: { component: 'RadioGroup' },\n    switch: { component: 'Switch' },\n    select: { labels: ['Foo Label', 'Bar Label', 'Baz Label'] },\n  },\n};\n\nrender(\n  <Form\n    schema={schema}\n    extraProps={extraProps}\n    middlewares={presetMws}\n  />\n);\n"})}},sDEB:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/kitchen-sink",function(){return t("7JGE")}])}},[["sDEB",0,1,3,6,5,2,4]]]);