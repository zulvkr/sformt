---
layout: basic
title: Program Bahasa
date: 2021-02-25T15:02:28.498Z
waNumber: 6285890710139
form:
  - type: textfield
    required: true
    label: Nama
    id: nama
  - type: textfield
    required: true
    label: Kota Tinggal
    id: kota
  - type: numberfield
    required: true
    label: Umur
    id: umur
  - type: selectfield
    required: true
    label: Program yang ingin diikuti
    id: program
    enum:
      - Bahasa Inggris
      - Bahasa Jepang
      - Bahasa Arab
  - type: radio
    required: true
    label: "Kemahiran Saat Ini [ skala: 0 (tidak bisa) - 5 (mahir) ]"
    id: level
    enum:
      - "0"
      - "1"
      - "2"
      - "3"
      - "4"
      - "5"
---
Isi form ini untuk mengikuti program pembelajaran.