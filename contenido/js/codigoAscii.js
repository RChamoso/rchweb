var codigoAscii = [
    codigoAsciiN = {
      titulo : 'Ascii Normal',
      contenido : [
          basico = {
            titulo  : 'Latin Basico',
            tabla : 'basico',
            contenido : 'AsciiBasico',
            boton : 'cerrarbasico',
            inicio  : 31,
            fin : 127
          },
          LatinE = {
            titulo  : 'Latin Extendido',
            tabla : 'LatinE',
            contenido : 'AsciiLatinE',
            boton : 'cerrarLatinE',
            inicio  : 7680,
            fin : 7935
          },
          LatinEA = {
            titulo  : 'Latin Extendido A',
            tabla : 'LatinEA',
            contenido : 'AsciiLatinEA',
            boton : 'cerrarLatinEA',
            inicio  : 256,
            fin : 383
          },
          LatinEB = {
            titulo  : 'Latin Extendido B',
            tabla : 'LatinEB',
            contenido : 'AsciiLatinEB',
            boton : 'cerrarLatinEB',
            inicio  : 384,
            fin : 591
          },
          LatinEC = {
            titulo  : 'Latin Extendido C',
            tabla : 'LatinEC',
            contenido : 'AsciiLatinEC',
            boton : 'cerrarLatinEC',
            inicio  : 11360,
            fin : 11391
          },
          LatinED = {
            titulo  : 'Latin Extendido D',
            tabla : 'LatinED',
            contenido : 'AsciiLatinED',
            boton : 'cerrarLatinED',
            inicio  : 42784,
            fin : 43007
          },
          LatinS = {
            titulo  : 'Latin Sumplemento',
            tabla : 'LatinS',
            contenido : 'AsciiLatinS',
            boton : 'cerrarLatinS',
            inicio  : 161,
            fin : 255
          },
          LinearB = {
            titulo  : 'Linear B',
            tabla : 'LinearB',
            contenido : 'AsciiLinearB',
            boton : 'cerrarLinearB',
            inicio  : 65536,
            fin : 65791
          },
          SuperscriptsSubscripts = {
            titulo  : 'Superscripts and Subscripts',
            tabla : 'SuperscriptsSubscripts',
            contenido : 'AsciiSuperscriptsSubscripts',
            boton : 'cerrarSuperscriptsSubscripts',
            inicio  : 8304,
            fin : 8351
          },
          CurrencySymbols = {
            titulo  : 'Currency Symbols',
            tabla : 'CurrencySymbols',
            contenido : 'AsciiCurrencySymbols',
            boton : 'cerrarCurrencySymbols',
            inicio  : 8352,
            fin : 8399
          },
          LetterlikeSymbols = {
            titulo  : 'Letterlike Symbols',
            tabla : 'LetterlikeSymbols',
            contenido : 'AsciiLetterlikeSymbols',
            boton : 'cerrarLetterlikeSymbols',
            inicio  : 8448,
            fin : 8527
          },
          NumberForms = {
            titulo  : 'Number Forms',
            tabla : 'NumberForms',
            contenido : 'AsciiNumberForms',
            boton : 'cerrarNumberForms',
            inicio  : 8528,
            fin : 8591
          },
          EnclosedAlphanumeric = {
            titulo  : 'Enclosed Alphanumerics',
            tabla : 'EnclosedAlphanumeric',
            contenido : 'AsciiEnclosedAlphanumeric',
            boton : 'cerrarEnclosedAlphanumeric',
            inicio  : 9312,
            fin : 9471
          },
          EnclosedAlphanumericS = {
            titulo  : 'Enclosed Alphanumeric Supplement',
            tabla : 'EnclosedAlphanumericS',
            contenido : 'AsciiEnclosedAlphanumericS',
            boton : 'cerrarEnclosedAlphanumericS',
            inicio  : 127232,
            fin : 127487
          },
          Arrows = {
            titulo  : 'Arrows',
            tabla : 'Arrows',
            contenido : 'AsciiArrows',
            boton : 'cerrarArrows',
            inicio  : 8592,
            fin : 8703
          },
          ArrowsA = {
            titulo  : 'Arrows A',
            tabla : 'ArrowsA',
            contenido : 'AsciiArrowsA',
            boton : 'cerrarArrowsA',
            inicio  : 10224,
            fin : 10239
          },
          ArrowsB = {
            titulo  : 'Arrows B',
            tabla : 'ArrowsB',
            contenido : 'AsciiArrowsB',
            boton : 'cerrarArrowsB',
            inicio  : 10496,
            fin : 10623
          },
          MiscellaneousSymbolsArrows = {
            titulo  : 'Miscelaneous Arrows and Symbols',
            tabla : 'MiscellaneousSymbolsArrows',
            contenido : 'AsciiMiscellaneousSymbolsArrows',
            boton : 'cerrarMiscellaneousSymbolsArrows',
            inicio  : 11008,
            fin : 11263
          },
          Simbolos = {
            titulo  : 'Simbolos',
            tabla : 'Simbolos',
            contenido : 'AsciiSimbolos',
            boton : 'cerrarLSimbolos',
            inicio  : 688,
            fin : 767
          },
          MiscellaneousS = {
            titulo  : 'Miscellaneous Symbols ',
            tabla : 'MiscellaneousS',
            contenido : 'AsciiMiscellaneousS',
            boton : 'cerrarMiscellaneousS',
            inicio  : 9728,
            fin : 9983
          },
          MiscellaneousSA = {
            titulo  : 'Miscellaneous Symbols A',
            tabla : 'MiscellaneousSA',
            contenido : 'AsciiMiscellaneousSA',
            boton : 'cerrarMiscellaneousSA',
            inicio  : 127744,
            fin : 128591
          },
          Dingbats = {
            titulo  : 'Dingbats',
            tabla : 'Dingbats',
            contenido : 'AsciiDingbats',
            boton : 'cerrarDingbats',
            inicio  : 9984,
            fin : 10175
          },
          GeneralP = {
            titulo  : 'General Punctuation',
            tabla : 'GeneralP',
            contenido : 'AsciiGeneralP',
            boton : 'cerrarGeneralP',
            inicio  : 8192,
            fin : 8303
          },
          BlockE = {
            titulo  : 'Block Elements',
            tabla : 'BlockE',
            contenido : 'AsciiBlockE',
            boton : 'cerrarBlockE',
            inicio  : 9600,
            fin : 9631
          },
          BoxDrawing = {
            titulo  : 'Box Drawing',
            tabla : 'BoxDrawing',
            contenido : 'AsciiBoxDrawing',
            boton : 'cerrarBoxDrawing',
            inicio  : 9472,
            fin : 9599
          },
          GeometricS = {
            titulo  : 'Geometric Shapes',
            tabla : 'GeometricS',
            contenido : 'AsciiGeometricS',
            boton : 'cerrarGeometricS',
            inicio  : 9632,
            fin : 9727
          },
          Cuneiform = {
            titulo  : 'Cuneiform',
            tabla : 'Cuneiform',
            contenido : 'AsciiCuneiform',
            boton : 'cerrarCuneiform',
            inicio  : 73728,
            fin : 74879
          },
          MiscellaneousT = {
            titulo  : 'Miscellaneous Technical',
            tabla : 'MiscellaneousT',
            contenido : 'AsciiMiscellaneousT',
            boton : 'cerrarMiscellaneousT',
            inicio  : 8960,
            fin : 9215
          },
          MathematicalO = {
            titulo  : 'Mathematical Operators',
            tabla : 'MathematicalO',
            contenido : 'AsciiMathematicalO',
            boton : 'cerrarMathematicalO',
            inicio  : 8704,
            fin : 8959
          },
          MathematicalSA = {
            titulo  : 'Mathematical Symbols-A',
            tabla : 'MathematicalSA',
            contenido : 'AsciiMathematicalSA',
            boton : 'cerrarMathematicalSA',
            inicio  : 10176,
            fin : 10223
          },
          SupplementalMathematicalO = {
            titulo  : 'Supplemental Mathematical Operators',
            tabla : 'SupplementalMathematicalO',
            contenido : 'AsciiSupplementalMathematicalO',
            boton : 'cerrarSupplementalMathematicalO',
            inicio  : 10752,
            fin : 11007
          },
          MiscellaneousMSB = {
            titulo  : 'Miscellaneous Mathematical Symbols-B',
            tabla : 'MiscellaneousMSB',
            contenido : 'AsciiMiscellaneousMSB',
            boton : 'cerrarMiscellaneousMSB',
            inicio  : 10624,
            fin : 10751
          },
          AlphabeticPresentationF = {
            titulo  : 'Alphabetic Presentation Forms',
            tabla : 'AlphabeticPresentationF',
            contenido : 'AsciiAlphabeticPresentationF',
            boton : 'cerrarAlphabeticPresentationF',
            inicio  : 64256,
            fin : 64335
          },
          VariationSelectors = {
            titulo  : 'Variation Selectors',
            tabla : 'VariationSelectors',
            contenido : 'AsciiVariationSelectors',
            boton : 'cerrarVariationSelectors',
            inicio  : 65024,
            fin : 65039
          },
          VerticalForms = {
            titulo  : 'Vertical Forms',
            tabla : 'VerticalForms',
            contenido : 'AsciiVerticalForms',
            boton : 'cerrarVerticalForms',
            inicio  : 65040,
            fin : 65055
          },
          SmallFormV = {
            titulo  : 'Small Form Variants',
            tabla : 'SmallFormV',
            contenido : 'AsciiSmallFormV',
            boton : 'cerrarSmallFormV',
            inicio  : 65104,
            fin : 65135
          },
          HalfwidthFullwidthF = {
            titulo  : 'Halfwidth and Fullwidth Forms',
            tabla : 'HalfwidthFullwidthF',
            contenido : 'AsciiHalfwidthFullwidthF',
            boton : 'cerrarHalfwidthFullwidthF',
            inicio  : 65280,
            fin : 65519
          },
          Specials = {
            titulo  : 'Specials',
            tabla : 'Specials',
            contenido : 'AsciiSpecials',
            boton : 'cerrarSpecials',
            inicio  : 65520,
            fin : 65535
          },
          Tags = {
            titulo  : 'Tags',
            tabla : 'Tags',
            contenido : 'AsciiTags',
            boton : 'cerrarTags',
            inicio  : 917504,
            fin : 917631
          },
          VariationSelectorsS = {
            titulo  : 'Variation Selectors Supplement',
            tabla : 'VariationSelectorsS',
            contenido : 'AsciiVariationSelectorsS',
            boton : 'cerrarVariationSelectorsS',
            inicio  : 917760,
            fin : 917999
          },
          ControlPictures = {
            titulo  : 'Control Pictures',
            tabla : 'ControlPictures',
            contenido : 'AsciiControlPictures',
            boton : 'cerrarControlPictures',
            inicio  : 9216,
            fin : 9279
          },
          CombiningHalfM = {
            titulo  : 'Combining Half Marks',
            tabla : 'CombiningHalfM',
            contenido : 'AsciiCombiningHalfM',
            boton : 'cerrarCombiningHalfM',
            inicio  : 65056,
            fin : 65071
          },
          Gothic = {
            titulo  : 'Gothic',
            tabla : 'MiscellaneousTGothic',
            contenido : 'AsciiGothic',
            boton : 'cerrar',
            inicio  : 66352,
            fin : 66383
          },
          OldItalic = {
            titulo  : 'Old Italic',
            tabla : 'OldItalic',
            contenido : 'AsciiOldItalic',
            boton : 'cerrarOldItalic',
            inicio  : 66304,
            fin : 66351
          },
          IdeographicD = {
            titulo  : 'Ideographic Description',
            tabla : 'IdeographicD',
            contenido : 'AsciiIdeographicD',
            boton : 'cerrarIdeographicD',
            inicio  : 12272,
            fin : 12287
          },
          ModifierToneLetters = {
            titulo  : 'Modifier Tone Letters',
            tabla : 'ModifierToneLetters',
            contenido : 'AsciiModifierToneLetters',
            boton : 'cerrarModifierToneLetters',
            inicio  : 42752,
            fin : 42783
          },
          OpticalCharacter = {
            titulo  : 'Optical Character',
            tabla : 'OpticalCharacter',
            contenido : 'AsciiOpticalCharacter',
            boton : 'cerrarOpticalCharacter',
            inicio  : 9280,
            fin : 9311
          },
          Diacritico = {
            titulo  : 'Signo Diacrítico',
            tabla : 'Diacritico',
            contenido : 'AsciiDiacritico',
            boton : 'cerrarLDiacritico',
            inicio  : 768,
            fin : 879
          },
          Diacritical = {
            titulo  : 'Combining Diacritical Marks Supplement',
            tabla : 'Diacritical',
            contenido : 'AsciiDiacritical',
            boton : 'cerrarLDiacritical',
            inicio  : 7616,
            fin : 7679
          },
          CombiningDiacriticalM = {
            titulo  : 'Combining Diacritical Marks',
            tabla : 'CombiningDiacriticalM',
            contenido : 'AsciiCombiningDiacriticalM',
            boton : 'cerrarCombiningDiacriticalM',
            inicio  : 8400,
            fin : 8447
          },
          IPA = {
            titulo  : 'International Phonetic Alphabet IPA',
            tabla : 'IPA',
            contenido : 'AsciiIPA',
            boton : 'cerrarLIPA',
            inicio  : 592,
            fin : 687
          },
          Braille = {
            titulo  : 'Braille',
            tabla : 'Braille',
            contenido : 'AsciiBraille',
            boton : 'cerrarBraille',
            inicio  : 10240,
            fin : 10495
          },
          MusicalSymbols = {
            titulo  : 'Musical symbols',
            tabla : 'MusicalSymbols',
            contenido : 'AsciiMusicalSymbols',
            boton : 'cerrarMusicalSymbols',
            inicio  : 119040,
            fin : 119295
          },
          ByzantineMusicalS = {
            titulo  : 'Byzantine musical symbols',
            tabla : 'ByzantineMusicalS',
            contenido : 'AsciiByzantineMusicalS',
            boton : 'cerrarByzantineMusicalS',
            inicio  : 118784,
            fin : 119039
          },
          AncientGreekMN = {
            titulo  : 'Ancient Greek musical notation',
            tabla : 'AncientGreekMN',
            contenido : 'AsciiAncientGreekMN',
            boton : 'cerrarAncientGreekMN',
            inicio  : 119296,
            fin : 119375
          },
          AlchemicalSymbols = {
            titulo  : 'Alchemical symbols',
            tabla : 'AlchemicalSymbols',
            contenido : 'AsciiAlchemicalSymbols',
            boton : 'cerrarAlchemicalSymbols',
            inicio  : 128768,
            fin : 128895
          },
          GameSymbols = {
            titulo  : 'Game symbols',
            tabla : 'GameSymbols',
            contenido : 'AsciiGameSymbols',
            boton : 'cerrarGameSymbols',
            inicio  : 126976,
            fin : 127231
          },
          MapSymbols = {
            titulo  : 'Map Symbols',
            tabla : 'MapSymbols',
            contenido : 'AsciiMapSymbols',
            boton : 'cerrarMapSymbols',
            inicio  : 128640,
            fin : 128767
          },
          SupplementalPunctuation = {
            titulo  : 'Supplemental Punctuation',
            tabla : 'SupplementalPunctuation',
            contenido : 'AsciiSupplementalPunctuation',
            boton : 'cerrarSupplementalPunctuation',
            inicio  : 11776,
            fin : 11903
          },
          EnclosedIdeographicS = {
            titulo  : 'Enclosed Ideographic Supplement',
            tabla : 'EnclosedIdeographicS',
            contenido : 'AsciiEnclosedIdeographicS',
            boton : 'cerrarEnclosedIdeographicS',
            inicio  : 127488,
            fin : 127743
          }
      ]
    },

    codigoAsciiChino = {
      titulo : 'Ascii Chino',
      contenido : [
          BamumS = {
            titulo  : 'Bamum Supplement',
            tabla : 'BamumS',
            contenido : 'AsciiBamumS',
            boton : 'cerrarBamumS',
            inicio  : 92160,
            fin : 92735
          },
          KangxiRadicals = {
            titulo  : 'Kangxi Radicals',
            tabla : 'KangxiRadicals',
            contenido : 'AsciiKangxiRadicals',
            boton : 'cerrarKangxiRadicals',
            inicio  : 12032,
            fin : 12255
          },
          Miao = {
            titulo  : 'Miao',
            tabla : 'Miao',
            contenido : 'AsciiMiao',
            boton : 'cerrarMiao',
            inicio  : 93952,
            fin : 94111
          }
      ]
    },

    codigoAsciiArabe = {
      titulo : 'Ascii Arabe',
      contenido : [
          Arabe = {
            titulo  : 'Arabe',
            tabla : 'Arabe',
            contenido : 'AsciiArabe',
            boton : 'cerrarLArabe',
            inicio  : 1536,
            fin : 1791
          },
          ArabeS = {
            titulo  : 'Arabe Suplemento',
            tabla : 'ArabeS',
            contenido : 'AsciiArabeS',
            boton : 'cerrarLArabeS',
            inicio  : 1872,
            fin : 1919
          },
          ArabicExtendedA = {
            titulo  : 'Arabic Extended-A',
            tabla : 'ArabicExtendedA',
            contenido : 'ArabicExtendedA',
            boton : 'cerrarArabicExtendedA',
            inicio  : 2208,
            fin : 2303
          },
          ArabicMathematicalAS = {
            titulo  : 'Arabic Mathematical Alphanumeric Symbols',
            tabla : 'ArabicMathematicalAS',
            contenido : 'AsciiArabicMathematicalAS',
            boton : 'cerrarArabicMathematicalAS',
            inicio  : 126464,
            fin : 126719
          },
          ArabicPFA = {
            titulo  : 'Arabic Presentation Forms A',
            tabla : 'ArabicPFA',
            contenido : 'AsciiArabicPFA',
            boton : 'cerrarArabicPFA',
            inicio  : 64336,
            fin : 65023
          },
          ArabicPFB = {
            titulo  : 'Arabic Presentation Forms B',
            tabla : 'ArabicPFB',
            contenido : 'AsciiArabicPFB',
            boton : 'cerrarArabicPFB',
            inicio  : 65136,
            fin : 65279
          },
          OldSouthArabian = {
            titulo  : 'Old South Arabian',
            tabla : 'OldSouthArabian',
            contenido : 'OldSouthArabian',
            boton : 'cerrarOldSouthArabian',
            inicio  : 68192,
            fin : 68223
          },
          EgyptianHieroglyphs = {
            titulo  : 'Egyptian Hieroglyphs',
            tabla : 'EgyptianHieroglyphs',
            contenido : 'AsciiEgyptianHieroglyphs',
            boton : 'cerrarEgyptianHieroglyphs',
            inicio  : 77824,
            fin : 78895
          },
          Sirio = {
            titulo  : 'Sirio',
            tabla : 'Sirio',
            contenido : 'AsciiSirio',
            boton : 'cerrarLSirio',
            inicio  : 1792,
            fin : 1871
          },
          Thaana = {
            titulo  : 'Thaana',
            tabla : 'Thaana',
            contenido : 'AsciiThaana',
            boton : 'cerrarLThaana',
            inicio  : 1920,
            fin : 1983
          }
      ]
    },

    codigoAsciiAntiguo = {
      titulo : 'Ascii Antiguo',
      contenido : [
          AncientSymbols = {
            titulo  : 'Ancient Symbols',
            tabla : 'AncientSymbols',
            contenido : 'AsciiAncientSymbols',
            boton : 'cerrarAncientSymbols',
            inicio  : 65936,
            fin : 65999
          },
          Armenio = {
            titulo  : 'Armenio',
            tabla : 'Armenio',
            contenido : 'AsciiArmenio',
            boton : 'cerrarLArmenio',
            inicio  : 1328,
            fin : 1423
          },
          ArmenioS = {
            titulo  : 'Armenio Suplemento',
            tabla : 'ArmenioS',
            contenido : 'AsciiArmenioS',
            boton : 'cerrarLArmenioS',
            inicio  : 64272,
            fin : 64284
          },
          ImperialAramaic = {
            titulo  : 'Imperial Aramaic',
            tabla : 'ImperialAramaic',
            contenido : 'AsciiImperialAramaic',
            boton : 'cerrarImperialAramaic',
            inicio  : 67648,
            fin : 67679
          },
          Carian  = {
            titulo  : 'Carian ',
            tabla : 'Carian ',
            contenido : 'AsciiCarian ',
            boton : 'cerrarCarian ',
            inicio  : 66208,
            fin : 66271
          },
          Coptic = {
            titulo  : 'Coptic',
            tabla : 'Coptic',
            contenido : 'AsciiCoptic',
            boton : 'cerrarCoptic',
            inicio  : 11392,
            fin : 11519
          },
          CypriotSyllabary = {
            titulo  : 'Cypriot Syllabary',
            tabla : 'CypriotSyllabary',
            contenido : 'AsciiCypriotSyllabary',
            boton : 'cerrarCypriotSyllabary',
            inicio  : 67584,
            fin : 67647
          },
          Cyrilico = {
            titulo  : 'Cyrilico',
            tabla : 'Cyrilico',
            contenido : 'AsciiCyrilico',
            boton : 'cerrarLCyrilico',
            inicio  : 1024,
            fin : 1279
          },
          CyrilicoS = {
            titulo  : 'Cyrilico Suplemento',
            tabla : 'CyrilicoS',
            contenido : 'AsciiCyrilicoS',
            boton : 'cerrarLCyrilicoS',
            inicio  : 1280,
            fin : 1327
          },
          CyrillicExtendedA = {
            titulo  : 'Cyrillic Extended-A',
            tabla : 'CyrillicExtendedA',
            contenido : 'AsciiCyrillicExtendedA',
            boton : 'cerrarCyrillicExtendedA',
            inicio  : 11744,
            fin : 11775
          },
          CyrillicExtendedB = {
            titulo  : 'Cyrillic Extended B',
            tabla : 'CyrillicExtendedB',
            contenido : 'AsciiCyrillicExtendedB',
            boton : 'cerrarCyrillicExtendedB',
            inicio  : 42560,
            fin : 42655
          },
          Deseret = {
            titulo  : 'Deseret',
            tabla : 'Deseret',
            contenido : 'AsciiDeseret',
            boton : 'cerrarDeseret',
            inicio  : 66560,
            fin : 66639
          },
          Griego = {
            titulo  : 'Griego y Coptic',
            tabla : 'Griego',
            contenido : 'AsciiGriego',
            boton : 'cerrarLGriego',
            inicio  : 880,
            fin : 1023
          },
          GreekE = {
            titulo  : 'Greek Extended',
            tabla : 'GreekE',
            contenido : 'AsciiGreekE',
            boton : 'cerrarGreekE',
            inicio  : 7936,
            fin : 8191
          },
          AncientGreekN = {
            titulo  : 'Ancient Greek Numbers',
            tabla : 'AncientGreekN',
            contenido : 'AsciiAncientGreekN',
            boton : 'cerrarAncientGreekN',
            inicio  : 65856,
            fin : 65935
          },
          Hebreo = {
            titulo  : 'Hebreo',
            tabla : 'Hebreo',
            contenido : 'AsciiHebreo',
            boton : 'cerrarLHebreo',
            inicio  : 1424,
            fin : 1535
          },
          IndicNumbersF = {
            titulo  : 'Indic Numbers Forms',
            tabla : 'IndicNumbersF',
            contenido : 'AsciiIndicNumbersF',
            boton : 'cerrarIndicNumbersF',
            inicio  : 43056,
            fin : 43071
          },
          Lycian = {
            titulo  : 'Lycian',
            tabla : 'Lycian',
            contenido : 'AsciiLycian',
            boton : 'cerrarLycian',
            inicio  : 66176,
            fin : 66207
          },
          Osmanya = {
            titulo  : 'Osmanya',
            tabla : 'Osmanya',
            contenido : 'AsciiOsmanya',
            boton : 'cerrarOsmanya',
            inicio  : 66688,
            fin : 66735
          },
          OldPersian = {
            titulo  : 'Old Persian',
            tabla : 'OldPersian',
            contenido : 'AsciiOldPersian',
            boton : 'cerrarOldPersian',
            inicio  : 66464,
            fin : 66527
          },
          PhaistosDisc = {
            titulo  : 'Phaistos Disc',
            tabla : 'PhaistosDisc',
            contenido : 'AsciiPhaistosDisc',
            boton : 'cerrarPhaistosDisc',
            inicio  : 66000,
            fin : 66047
          },
          Shavian = {
            titulo  : 'Shavian',
            tabla : 'Shavian',
            contenido : 'AsciiShavian',
            boton : 'cerrarShavian',
            inicio  : 66640,
            fin : 66687
          },
          Ugaritic = {
            titulo  : 'Ugaritic',
            tabla : 'MiscellaneousTUgaritic',
            contenido : 'AsciiUgaritic',
            boton : 'cerrarUgaritic',
            inicio  : 66432,
            fin : 66463
          }
      ]
    },

    codigoAsciiOtrosIdiomas = {
      titulo : 'Ascii Otros',
      contenido : [
          AegeanNumbers = {
            titulo  : 'Aegean Numbers',
            tabla : 'AegeanNumbers',
            contenido : 'AsciiAegeanNumbers',
            boton : 'cerrarAegeanNumbers',
            inicio  : 65792,
            fin : 65855
          },
          Avestan = {
            titulo  : 'Avestan',
            tabla : 'Avestan',
            contenido : 'AsciiAvestan',
            boton : 'cerrarAvestan',
            inicio  : 68352,
            fin : 68415
          },
          Balinese = {
            titulo  : 'Balinese',
            tabla : 'Balinese',
            contenido : 'AsciiBalinese',
            boton : 'cerrarLBalinese',
            inicio  : 6912,
            fin : 7039
          },
          Bamum = {
            titulo  : 'Bamum',
            tabla : 'Bamum',
            contenido : 'AsciiBamum',
            boton : 'cerrarBamum',
            inicio  : 42656,
            fin : 42751
          },
          Batak = {
            titulo  : 'Batak',
            tabla : 'Batak',
            contenido : 'AsciiBatak',
            boton : 'cerrarLBatak',
            inicio  : 7104,
            fin : 7167
          },
          Bengali = {
            titulo  : 'Bengali',
            tabla : 'Bengali',
            contenido : 'AsciiBengali',
            boton : 'cerrarLBengali',
            inicio  : 2432,
            fin : 2559
          },
          Bopomofo = {
            titulo  : 'Bopomofo',
            tabla : 'Bopomofo',
            contenido : 'AsciiBopomofo',
            boton : 'cerrarBopomofo',
            inicio  : 12544,
            fin : 12591
          },
          BopomofoE = {
            titulo  : 'Bopomofo Extended',
            tabla : 'BopomofoE',
            contenido : 'AsciiBopomofoE',
            boton : 'cerrarBopomofoE',
            inicio  : 12704,
            fin : 12735
          },
          Brahmi = {
            titulo  : 'Brahmi',
            tabla : 'Brahmi',
            contenido : 'AsciiBrahmi',
            boton : 'cerrarBrahmi',
            inicio  : 69632,
            fin : 69759
          },
          Buginese = {
            titulo  : 'Buginese',
            tabla : 'Buginese',
            contenido : 'AsciiBuginese',
            boton : 'cerrarLBuginese',
            inicio  : 6656,
            fin : 6687
          },
          Buhid = {
            titulo  : 'Buhid',
            tabla : 'Buhid',
            contenido : 'AsciiBuhid',
            boton : 'cerrarLBuhid',
            inicio  : 5952,
            fin : 5983
          },
          Canada = {
            titulo  : 'Canada Aborigen',
            tabla : 'Canada',
            contenido : 'AsciiCanada',
            boton : 'cerrarLCanada',
            inicio  : 5120,
            fin : 5759
          },
          CanadaA = {
            titulo  : 'Canada Aborigen Extendido',
            tabla : 'CanadaA',
            contenido : 'AsciiCanadaA',
            boton : 'cerrarLCanadaA',
            inicio  : 6320,
            fin : 6399
          },
          Chakma = {
            titulo  : 'Chakma',
            tabla : 'Chakma',
            contenido : 'AsciiChakma',
            boton : 'cerrarChakma',
            inicio  : 69888,
            fin : 69967
          },
          Cherokee = {
            titulo  : 'Cherokee',
            tabla : 'Cherokee',
            contenido : 'AsciiCherokee',
            boton : 'cerrarLCherokee',
            inicio  : 5024,
            fin : 5119
          },
          Cham = {
            titulo  : 'Cham',
            tabla : 'Cham',
            contenido : 'AsciiCham',
            boton : 'cerrarCham',
            inicio  : 43520,
            fin : 43615
          },
          CountingRodNumerals = {
            titulo  : 'Counting Rod Numerals',
            tabla : 'CountingRodNumerals',
            contenido : 'AsciiCountingRodNumerals',
            boton : 'cerrarCountingRodNumerals',
            inicio  : 119648,
            fin : 119679
          },
          Devanagari = {
            titulo  : 'Devanagari',
            tabla : 'Devanagari',
            contenido : 'AsciiDevanagari',
            boton : 'cerrarLDevanagari',
            inicio  : 2304,
            fin : 2431
          },
          DevanagariE = {
            titulo  : 'Devanagari Extended',
            tabla : 'DevanagariE',
            contenido : 'AsciiDevanagariE',
            boton : 'cerrarDevanagariE',
            inicio  : 43232,
            fin : 43263
          },
          Ethiopic = {
            titulo  : 'Ethiopic',
            tabla : 'Ethiopic',
            contenido : 'AsciiEthiopic',
            boton : 'cerrarLEthiopic',
            inicio  : 4608,
            fin : 5023
          },
          EthiopicA = {
            titulo  : 'Ethiopic Extendido A',
            tabla : 'EthiopicA',
            contenido : 'AsciiEthiopicA',
            boton : 'cerrarLEthiopicA',
            inicio  : 11648,
            fin : 11743
          },
          EthiopicB = {
            titulo  : 'Ethiopic Extendido B',
            tabla : 'EthiopicB',
            contenido : 'AsciiEthiopicB',
            boton : 'cerrarLEthiopicB',
            inicio  : 43776,
            fin : 43823
          },
          Georgian = {
            titulo  : 'Georgian',
            tabla : 'Georgian',
            contenido : 'AsciiGeorgian',
            boton : 'cerrarLGeorgian',
            inicio  : 4256,
            fin : 4351
          },
          GeorgianS = {
            titulo  : 'Georgian Supplement',
            tabla : 'GeorgianS',
            contenido : 'AsciiGeorgianS',
            boton : 'cerrarGeorgianS',
            inicio  : 11520,
            fin : 11567
          },
          Glagolitic = {
            titulo  : 'Glagolitic',
            tabla : 'Glagolitic',
            contenido : 'AsciiGlagolitic',
            boton : 'cerrarGlagolitic',
            inicio  : 11264,
            fin : 11359
          },
          Gurmukhi = {
            titulo  : 'Gurmukhi',
            tabla : 'Gurmukhi',
            contenido : 'AsciiGurmukhi',
            boton : 'cerrarLGurmukhi',
            inicio  : 2560,
            fin : 2687
          },
          Gujarati = {
            titulo  : 'Gujarati',
            tabla : 'Gujarati',
            contenido : 'AsciiGujarati',
            boton : 'cerrarLGujarati',
            inicio  : 2688,
            fin : 2815
          },
          Hangul = {
            titulo  : 'Hangul jamo',
            tabla : 'Hangul',
            contenido : 'AsciiHangul',
            boton : 'cerrarLHangul',
            inicio  : 4352,
            fin : 4607
          },
          HangulS1 = {
            titulo  : 'Hangul jamo Suplemento 1',
            tabla : 'HangulS1',
            contenido : 'AsciiHangulS1',
            boton : 'cerrarLHangulS1',
            inicio  : 43360,
            fin : 43391
          },
          HangulS2 = {
            titulo  : 'Hangul jamo Suplemento 2',
            tabla : 'HangulS2',
            contenido : 'AsciiHangulS2',
            boton : 'cerrarLHangulS2',
            inicio  : 55216,
            fin : 55295
          },
          HangulCJamo = {
            titulo  : 'Hangul Compatibility Jamo',
            tabla : 'HangulCJamo',
            contenido : 'AsciiHangulCJamo',
            boton : 'cerrarHangulCJamo',
            inicio  : 12592,
            fin : 12687
          },
          HangulSyllables = {
            titulo  : 'Hangul Syllables',
            tabla : 'HangulSyllables',
            contenido : 'AsciiHangulSyllables',
            boton : 'cerrarHangulSyllables',
            inicio  : 44032,
            fin : 55215
          },
          Hanunoo = {
            titulo  : 'Hanunoo',
            tabla : 'Hanunoo',
            contenido : 'AsciiHanunoo',
            boton : 'cerrarLHanunoo',
            inicio  : 5920,
            fin : 5951
          },
          Hiragana = {
            titulo  : 'Hiragana',
            tabla : 'Hiragana',
            contenido : 'AsciiHiragana',
            boton : 'cerrarHiragana',
            inicio  : 12352,
            fin : 12447
          },
          Javanese = {
            titulo  : 'Javanese',
            tabla : 'Javanese',
            contenido : 'AsciiJavanese',
            boton : 'cerrarJavanese',
            inicio  : 43392,
            fin : 43487
          },
          Kaithi = {
            titulo  : 'Kaithi',
            tabla : 'Kaithi',
            contenido : 'AsciiKaithi',
            boton : 'cerrarKaithi',
            inicio  : 69760,
            fin : 69839
          },
          KanaS = {
            titulo  : 'Kana Supplement',
            tabla : 'KanaS',
            contenido : 'AsciiKanaS',
            boton : 'cerrarKanaS',
            inicio  : 110592,
            fin : 110847
          },
          Kanbun = {
            titulo  : 'Kanbun',
            tabla : 'Kanbun',
            contenido : 'AsciiKanbun',
            boton : 'cerrarKanbun',
            inicio  : 12688,
            fin : 12703
          },
          Kannada = {
            titulo  : 'Kannada',
            tabla : 'Kannada',
            contenido : 'AsciiKannada',
            boton : 'cerrarLKannada',
            inicio  : 3200,
            fin : 3327
          },
          Katakana = {
            titulo  : 'Katakana',
            tabla : 'Katakana',
            contenido : 'AsciiKatakana',
            boton : 'cerrarKatakana',
            inicio  : 12448,
            fin : 12543
          },
          KatakanaPhoneticE = {
            titulo  : 'Katakana Phonetic Extensions',
            tabla : 'KatakanaPhoneticE',
            contenido : 'AsciiKatakanaPhoneticE',
            boton : 'cerrarKatakanaPhoneticE',
            inicio  : 12784,
            fin : 12799
          },
          KayahLi = {
            titulo  : 'Kayah Li',
            tabla : 'KayahLi',
            contenido : 'AsciiKayahLi',
            boton : 'cerrarKayahLi',
            inicio  : 43264,
            fin : 43311
          },
          Khmer = {
            titulo  : 'Khmer',
            tabla : 'Khmer',
            contenido : 'AsciiKhmer',
            boton : 'cerrarLKhmer',
            inicio  : 6016,
            fin : 6143
          },
          KhmerS = {
            titulo  : 'Khmer Symbols',
            tabla : 'KhmerS',
            contenido : 'AsciiKhmerS',
            boton : 'cerrarLKhmerS',
            inicio  : 6624,
            fin : 6655
          },
          Kharoshthi = {
            titulo  : 'Kharoshthi',
            tabla : 'Kharoshthi',
            contenido : 'AsciiKharoshthi',
            boton : 'cerrarKharoshthi',
            inicio  : 68096,
            fin : 68191
          },
          Lao = {
            titulo  : 'Lao',
            tabla : 'Lao',
            contenido : 'AsciiLao',
            boton : 'cerrarLLao',
            inicio  : 3712,
            fin : 3839
          },
          Lepcha = {
            titulo  : 'Lepcha',
            tabla : 'Lepcha',
            contenido : 'AsciiLepcha',
            boton : 'cerrarLLepcha',
            inicio  : 7168,
            fin : 7247
          },
          Lydian = {
            titulo  : 'Lydian',
            tabla : 'Lydian',
            contenido : 'AsciiLydian',
            boton : 'cerrarLydian',
            inicio  : 67872,
            fin : 67903
          },
          Limbu = {
            titulo  : 'Limbu',
            tabla : 'Limbu',
            contenido : 'AsciiLimbu',
            boton : 'cerrarLLimbu',
            inicio  : 6400,
            fin : 6479
          },
          Lisu = {
            titulo  : 'Lisu',
            tabla : 'Lisu',
            contenido : 'AsciiLisu',
            boton : 'cerrarLisu',
            inicio  : 42192,
            fin : 42239
          },
          Malayalam = {
            titulo  : 'Malayalam',
            tabla : 'Malayalam',
            contenido : 'AsciiMalayalam',
            boton : 'cerrarLMalayalam',
            inicio  : 3328,
            fin : 3455
          },
          MathematicalAlphanumericS = {
            titulo  : 'Mathematical Alphanumeric Symbols',
            tabla : 'MathematicalAlphanumericS',
            contenido : 'AsciiMathematicalAlphanumericS',
            boton : 'cerrarMathematicalAlphanumericS',
            inicio  : 119808,
            fin : 120831
          },
          Mandaic = {
            titulo  : 'Mandaic',
            tabla : 'Mandaic',
            contenido : 'AsciiMandaic',
            boton : 'cerrarLMandaic',
            inicio  : 2112,
            fin : 2143
          },
          MeeteiMayek = {
            titulo  : 'Meetei Mayek',
            tabla : 'MeeteiMayek',
            contenido : 'AsciiMeeteiMayek',
            boton : 'cerrarMeeteiMayek',
            inicio  : 43968,
            fin : 44031
          },
          MeeteiMayekE = {
            titulo  : 'Meetei Mayek Extensions',
            tabla : 'MeeteiMayekE',
            contenido : 'AsciiMeeteiMayekE',
            boton : 'cerrarMeeteiMayekE',
            inicio  : 43744,
            fin : 43775
          },
          Meroitic = {
            titulo  : 'Meroitic',
            tabla : 'Meroitic',
            contenido : 'AsciiMeroitic',
            boton : 'cerrarMeroitic',
            inicio  : 67968,
            fin : 68095
          },
          Mongolian = {
            titulo  : 'Mongolian',
            tabla : 'Mongolian',
            contenido : 'AsciiMongolian',
            boton : 'cerrarLMongolian',
            inicio  : 6144,
            fin : 6319
          },
          Myanmar = {
            titulo  : 'Myanmar',
            tabla : 'Myanmar',
            contenido : 'AsciiMyanmar',
            boton : 'cerrarLMyanmar',
            inicio  : 4096,
            fin : 4255
          },
          MyanmarS = {
            titulo  : 'Myanmar Suplemento',
            tabla : 'MyanmarS',
            contenido : 'AsciiMyanmarS',
            boton : 'cerrarLMyanmarS',
            inicio  : 43616,
            fin : 43647
          },
          NKo = {
            titulo  : 'N`Ko',
            tabla : 'NKo',
            contenido : 'AsciiNKo',
            boton : 'cerrarLNKo',
            inicio  : 1984,
            fin : 2047
          },
          Ogham = {
            titulo  : 'Ogham',
            tabla : 'Ogham',
            contenido : 'AsciiOgham',
            boton : 'cerrarLOgham',
            inicio  : 5760,
            fin : 5791
          },
          OlChiki = {
            titulo  : 'Ol Chiki',
            tabla : 'OlChiki',
            contenido : 'AsciiOlChiki',
            boton : 'cerrarLOlChiki',
            inicio  : 7248,
            fin : 7295
          },
          Oriya = {
            titulo  : 'Oriya',
            tabla : 'Oriya',
            contenido : 'AsciiOriya',
            boton : 'cerrarLOriya',
            inicio  : 2816,
            fin : 2943
          },
          InscriptionalPahlavi = {
            titulo  : 'Inscriptional Pahlavi',
            tabla : 'InscriptionalPahlavi',
            contenido : 'AsciiInscriptionalPahlavi',
            boton : 'cerrarInscriptionalPahlavi',
            inicio  : 68448,
            fin : 68479
          },
          InscriptionalParthian = {
            titulo  : 'Inscriptional Parthian',
            tabla : 'InscriptionalParthian',
            contenido : 'AsciiInscriptionalParthian',
            boton : 'cerrarInscriptionalParthian',
            inicio  : 68416,
            fin : 68447
          },
          PhagsPa = {
            titulo  : 'Phags-pa',
            tabla : 'PhagsPa',
            contenido : 'AsciiPhagsPa',
            boton : 'cerrarPhagsPa',
            inicio  : 43072,
            fin : 43135
          },
          Phonetic = {
            titulo  : 'Phonetic',
            tabla : 'Phonetic',
            contenido : 'AsciiPhonetic',
            boton : 'cerrarLPhonetic',
            inicio  : 7424,
            fin : 7615
          },
          Phoenician = {
            titulo  : 'Phoenician',
            tabla : 'Phoenician',
            contenido : 'AsciiPhoenician',
            boton : 'cerrarPhoenician',
            inicio  : 67840,
            fin : 67871
          },
          Rejang = {
            titulo  : 'Rejang',
            tabla : 'Rejang',
            contenido : 'AsciiRejang',
            boton : 'cerrarRejang',
            inicio  : 43312,
            fin : 43359
          },
          Runic = {
            titulo  : 'Runic',
            tabla : 'Runic',
            contenido : 'AsciiRunic',
            boton : 'cerrarLRunic',
            inicio  : 5792,
            fin : 5887
          },
          RumiNumeralS = {
            titulo  : 'Rumi Numeral Symbols',
            tabla : 'RumiNumeralS',
            contenido : 'AsciiRumiNumeralS',
            boton : 'cerrarRumiNumeralS',
            inicio  : 69216,
            fin : 69247
          },
          Samaritano = {
            titulo  : 'Samaritano',
            tabla : 'Samaritano',
            contenido : 'AsciiSamaritano',
            boton : 'cerrarLSamaritano',
            inicio  : 2048,
            fin : 2111
          },
          Saurashtra = {
            titulo  : 'Saurashtra',
            tabla : 'Saurashtra',
            contenido : 'AsciiSaurashtra',
            boton : 'cerrarSaurashtra',
            inicio  : 43136,
            fin : 43231
          },
          Sharada = {
            titulo  : 'Sharada',
            tabla : 'Sharada',
            contenido : 'AsciiSharada',
            boton : 'cerrarSharada',
            inicio  : 70016,
            fin : 70111
          },
          Sinhala = {
            titulo  : 'Sinhala',
            tabla : 'Sinhala',
            contenido : 'AsciiSinhala',
            boton : 'cerrarLSinhala',
            inicio  : 3456,
            fin : 3583
          },
          SoraSompeng = {
            titulo  : 'Sora Sompeng',
            tabla : 'SoraSompeng',
            contenido : 'AsciiSoraSompeng',
            boton : 'cerrarSoraSompeng',
            inicio  : 69840,
            fin : 69887
          },
          Sundanese = {
            titulo  : 'Sundanese',
            tabla : 'Sundanese',
            contenido : 'AsciiSundanese',
            boton : 'cerrarLSundanese',
            inicio  : 7040,
            fin : 7103
          },
          SundaneseS = {
            titulo  : 'Sundanese Supplement',
            tabla : 'SundaneseS',
            contenido : 'AsciiSundaneseS',
            boton : 'cerrarSundaneseS',
            inicio  : 7360,
            fin : 7375
          },
          SylotiNagri = {
            titulo  : 'Syloti Nagri',
            tabla : 'SylotiNagri',
            contenido : 'AsciiSylotiNagri',
            boton : 'cerrarSylotiNagri',
            inicio  : 43008,
            fin : 43055
          },
          Tagalog = {
            titulo  : 'Tagalog',
            tabla : 'Tagalog',
            contenido : 'AsciiTagalog',
            boton : 'cerrarLTagalog',
            inicio  : 5888,
            fin : 5919
          },
          Tagbanwa = {
            titulo  : 'Tagbanwa',
            tabla : 'Tagbanwa',
            contenido : 'AsciiTagbanwa',
            boton : 'cerrarLTagbanwa',
            inicio  : 5984,
            fin : 6015
          },
          TaiLe = {
            titulo  : 'Tai Le',
            tabla : 'TaiLe',
            contenido : 'AsciiTaiLe',
            boton : 'cerrarLTaiLe',
            inicio  : 6480,
            fin : 6527
          },
          TaiLue = {
            titulo  : 'Tai Lue',
            tabla : 'TaiLue',
            contenido : 'AsciiTaiLue',
            boton : 'cerrarLTaiLue',
            inicio  : 6528,
            fin : 6623
          },
          TaiTham = {
            titulo  : 'Tai Tham',
            tabla : 'TaiTham',
            contenido : 'AsciiTaiTham',
            boton : 'cerrarLTaiTham',
            inicio  : 6688,
            fin : 6831
          },
          TaiViet = {
            titulo  : 'Tai Viet',
            tabla : 'TaiViet',
            contenido : 'AsciiTaiViet',
            boton : 'cerrarTaiViet',
            inicio  : 43648,
            fin : 43743
          },
          TaiXuanJingS = {
            titulo  : 'Tai Xuan Jing Symbols',
            tabla : 'TaiXuanJingS',
            contenido : 'AsciiTaiXuanJingS',
            boton : 'cerrarTaiXuanJingS',
            inicio  : 119552,
            fin : 119647
          },
          Takri = {
            titulo  : 'Takri',
            tabla : 'Takri',
            contenido : 'AsciiTakri',
            boton : 'cerrarTakri',
            inicio  : 71296,
            fin : 71375
          },
          Tamil = {
            titulo  : 'Tamil',
            tabla : 'Tamil',
            contenido : 'AsciiTamil',
            boton : 'cerrarLTamil',
            inicio  : 2944,
            fin : 3071
          },
          Telugu = {
            titulo  : 'Telugu',
            tabla : 'Telugu',
            contenido : 'AsciiTelugu',
            boton : 'cerrarLTelugu',
            inicio  : 3072,
            fin : 3199
          },
          Thai = {
            titulo  : 'Thai',
            tabla : 'Thai',
            contenido : 'AsciiThai',
            boton : 'cerrarLThai',
            inicio  : 3584,
            fin : 3711
          },
          Tibetan = {
            titulo  : 'Tibetan',
            tabla : 'Tibetan',
            contenido : 'AsciiTibetan',
            boton : 'cerrarLTibetan',
            inicio  : 3840,
            fin : 4095
          },
          Tifinagh = {
            titulo  : 'Tifinagh',
            tabla : 'Tifinagh',
            contenido : 'AsciiTifinagh',
            boton : 'cerrarTifinagh',
            inicio  : 11568,
            fin : 11647
          },
          OldTurkic = {
            titulo  : 'Old Turkic',
            tabla : 'OldTurkic',
            contenido : 'AsciiOldTurkic',
            boton : 'cerrarOldTurkic',
            inicio  : 68608,
            fin : 68687
          },
          Vai = {
            titulo  : 'Vai',
            tabla : 'Vai',
            contenido : 'AsciiVai',
            boton : 'cerrarVai',
            inicio  : 42240,
            fin : 42559
          },
          Vedic = {
            titulo  : 'Vedic Extensions',
            tabla : 'Vedic',
            contenido : 'AsciiVedic',
            boton : 'cerrarLVedic',
            inicio  : 7376,
            fin : 7423
          },
          YijingHexagramSymbols = {
            titulo  : 'Yijing Hexagram Symbols',
            tabla : 'YijingHexagramSymbols',
            contenido : 'AsciiYijingHexagramSymbols',
            boton : 'cerrarYijingHexagramSymbols',
            inicio  : 19904,
            fin : 19967
          },
          YiRadicals = {
            titulo  : 'Yi Radicals',
            tabla : 'YiRadicals',
            contenido : 'AsciiYiRadicals',
            boton : 'cerrarYiRadicals',
            inicio  : 42128,
            fin : 42191
          },
          YiSyllables = {
            titulo  : 'Yi Syllables',
            tabla : 'YiSyllables',
            contenido : 'AsciiYiSyllables',
            boton : 'cerrarYiSyllables',
            inicio  : 40960,
            fin : 42127
          }
      ]
    },

    codigoAsciiCJK = {
      titulo : 'Ascii CJK',
      contenido : [
          CJKCompatibility = {
            titulo  : 'CJK Compatibility',
            tabla : 'CJKCompatibility',
            contenido : 'AsciiCJKCompatibility',
            boton : 'cerrarCJKCompatibility',
            inicio  : 13056,
            fin : 13311
          },
          CJKCompatibilityIdeographs = {
            titulo  : 'CJK Compatibility Ideographs',
            tabla : 'CJKCompatibilityIdeographs',
            contenido : 'AsciiCJKCompatibilityIdeographs',
            boton : 'cerrarCJKCompatibilityIdeographs',
            inicio  : 63744,
            fin : 64223
          },
          CJKCompatibilityIS = {
            titulo  : 'CJK Compatibility Ideographs Supplement',
            tabla : 'CJKCompatibilityIS',
            contenido : 'AsciiCJKCompatibilityIS',
            boton : 'cerrarCJKCompatibilityIS',
            inicio  : 194560,
            fin : 195103
          },
          CJKCompatibilityF = {
            titulo  : 'CJK Compatibility Forms',
            tabla : 'CJKCompatibilityF',
            contenido : 'AsciiCJKCompatibilityF',
            boton : 'cerrarCJKCompatibilityF',
            inicio  : 65072,
            fin : 65103
          },
          CJKLettersMonthsE = {
            titulo  : 'CJK Letters and Months  Enclosed',
            tabla : 'CJKLettersMonthsE',
            contenido : 'AsciiCJKLettersMonthsE',
            boton : 'cerrarCJKLettersMonthsE',
            inicio  : 12800,
            fin : 13055
          },
          CJKRadicalsS = {
            titulo  : 'CJK Radicals Supplement',
            tabla : 'CJKRadicalsS',
            contenido : 'AsciiCJKRadicalsS',
            boton : 'cerrarCJKRadicalsS',
            inicio  : 11904,
            fin : 12031
          },
          CJKSymbolsP = {
            titulo  : 'CJK Symbols and Punctuation',
            tabla : 'CJKSymbolsP',
            contenido : 'AsciiCJKSymbolsP',
            boton : 'cerrarCJKSymbolsP',
            inicio  : 12288,
            fin : 12351
          },
          CJKStrokes = {
            titulo  : 'CJK Strokes',
            tabla : 'CJKStrokes',
            contenido : 'AsciiCJKStrokes',
            boton : 'cerrarCJKStrokes',
            inicio  : 12736,
            fin : 12783
          },
          CJKUnifiedIdeographs = {
            titulo  : 'CJK Unified Ideographs',
            tabla : 'CJKUnifiedIdeographs',
            contenido : 'AsciiCJKUnifiedIdeographs',
            boton : 'cerrarCJKUnifiedIdeographs',
            inicio  : 19968,
            fin : 40959
          },
          CJKUnifiedIEA = {
            titulo  : 'CJK Unified Ideographs Extension A',
            tabla : 'CJKUnifiedIEA',
            contenido : 'AsciiCJKUnifiedIEA',
            boton : 'cerrarCJKUnifiedIEA',
            inicio  : 13312,
            fin : 19903
          },
          CJKUnifiedIEB = {
            titulo  : 'CJK Unified Ideographs Extension B',
            tabla : 'CJKUnifiedIEB',
            contenido : 'AsciiCJKUnifiedIEB',
            boton : 'cerrarCJKUnifiedIEB',
            inicio  : 131072,
            fin : 173791
          },
          CJKUnifiedIEC = {
            titulo  : 'CJK Unified Ideographs Extension C',
            tabla : 'CJKUnifiedIEC',
            contenido : 'AsciiCJKUnifiedIEC',
            boton : 'cerrarCJKUnifiedIEC',
            inicio  : 173824,
            fin : 177983
          },
          CJKUnifiedIED = {
            titulo  : 'CJK Unified Ideographs Extension D',
            tabla : 'CJKUnifiedIED',
            contenido : 'AsciiCJKUnifiedIED',
            boton : 'cerrarCJKUnifiedIED',
            inicio  : 177984,
            fin : 178207
          }
      ]
    },

    codigoAsciiSC = {
      titulo : 'Ascii Sin Clasificar',
      contenido : [
          SClasificar1 = {
            titulo  : 'Sin Clasificar 1',
            tabla : 'SClasificar1',
            contenido : 'AsciiSClasificar1',
            boton : 'cerrarSClasificar1',
            inicio  : 2144,
            fin : 2207
          },
          SClasificar2 = {
            titulo  : 'Sin Clasificar 2',
            tabla : 'SClasificar2',
            contenido : 'AsciiSClasificar2',
            boton : 'cerrarSClasificar2',
            inicio  : 6832,
            fin : 6911
          },
          SClasificar3 = {
            titulo  : 'Sin Clasificar 3',
            tabla : 'SClasificar3',
            contenido : 'AsciiSClasificar3',
            boton : 'cerrarSClasificar3',
            inicio  : 7296,
            fin : 7359
          },
          SClasificar4 = {
            titulo  : 'Sin Clasificar 4',
            tabla : 'SClasificar4',
            contenido : 'AsciiSClasificar4',
            boton : 'cerrarSClasificar4',
            inicio  : 12256,
            fin : 12271
          },
          SClasificar5 = {
            titulo  : 'Sin Clasificar 5',
            tabla : 'SClasificar5',
            contenido : 'AsciiSClasificar5',
            boton : 'cerrarSClasificar5',
            inicio  : 43488,
            fin : 43519
          },
          SClasificar6 = {
            titulo  : 'Sin Clasificar 6',
            tabla : 'SClasificar6',
            contenido : 'AsciiSClasificar6',
            boton : 'cerrarSClasificar6',
            inicio  : 43824,
            fin : 43967
          },
          SClasificar7 = {
            titulo  : 'Sin Clasificar 7',
            tabla : 'SClasificar7',
            contenido : 'AsciiSClasificar7',
            boton : 'cerrarSClasificar7',
            inicio  : 55296,
            fin : 63743
          },
          SClasificar8 = {
            titulo  : 'Sin Clasificar 8',
            tabla : 'SClasificar8',
            contenido : 'AsciiSClasificar8',
            boton : 'cerrarSClasificar8',
            inicio  : 64224,
            fin : 64255
          },
          SClasificar9 = {
            titulo  : 'Sin Clasificar 9',
            tabla : 'SClasificar9',
            contenido : 'AsciiSClasificar9',
            boton : 'cerrarSClasificar9',
            inicio  : 66048,
            fin : 66175
          },
          SClasificar10 = {
            titulo  : 'Sin Clasificar 10',
            tabla : 'SClasificar10',
            contenido : 'AsciiSClasificar10',
            boton : 'cerrarSClasificar10',
            inicio  : 66272,
            fin : 66303
          },
          SClasificar11 = {
            titulo  : 'Sin Clasificar 11',
            tabla : 'SClasificar11',
            contenido : 'AsciiSClasificar11',
            boton : 'cerrarSClasificar11',
            inicio  : 66384,
            fin : 66431
          },
          SClasificar12 = {
            titulo  : 'Sin Clasificar 12',
            tabla : 'SClasificar12',
            contenido : 'AsciiSClasificar12',
            boton : 'cerrarSClasificar12',
            inicio  : 66528,
            fin : 66559
          },
          SClasificar13 = {
            titulo  : 'Sin Clasificar 13',
            tabla : 'SClasificar13',
            contenido : 'AsciiSClasificar13',
            boton : 'cerrarSClasificar13',
            inicio  : 66736,
            fin : 67583
          },
          SClasificar14 = {
            titulo  : 'Sin Clasificar 14',
            tabla : 'SClasificar14',
            contenido : 'AsciiSClasificar14',
            boton : 'cerrarSClasificar14',
            inicio  : 67680,
            fin : 67839
          },
          SClasificar15 = {
            titulo  : 'Sin Clasificar 15',
            tabla : 'SClasificar15',
            contenido : 'AsciiSClasificar15',
            boton : 'cerrarSClasificar15',
            inicio  : 67904,
            fin : 67967
          },
          SClasificar16 = {
            titulo  : 'Sin Clasificar 16',
            tabla : 'SClasificar16',
            contenido : 'AsciiSClasificar16',
            boton : 'cerrarSClasificar16',
            inicio  : 68224,
            fin : 68351
          },
          SClasificar17 = {
            titulo  : 'Sin Clasificar 17',
            tabla : 'SClasificar17',
            contenido : 'AsciiSClasificar17',
            boton : 'cerrarSClasificar17',
            inicio  : 68480,
            fin : 68607
          },
          SClasificar18 = {
            titulo  : 'Sin Clasificar 18',
            tabla : 'SClasificar18',
            contenido : 'AsciiSClasificar18',
            boton : 'cerrarSClasificar18',
            inicio  : 68688,
            fin : 69215
          },
          SClasificar19 = {
            titulo  : 'Sin Clasificar 19',
            tabla : 'SClasificar19',
            contenido : 'AsciiSClasificar19',
            boton : 'cerrarSClasificar19',
            inicio  : 69248,
            fin : 69631
          },
          SClasificar20 = {
            titulo  : 'Sin Clasificar 20',
            tabla : 'SClasificar20',
            contenido : 'AsciiSClasificar20',
            boton : 'cerrarSClasificar20',
            inicio  : 69968,
            fin : 70015
          },
          SClasificar21 = {
            titulo  : 'Sin Clasificar 21',
            tabla : 'SClasificar21',
            contenido : 'AsciiSClasificar21',
            boton : 'cerrarSClasificar21',
            inicio  : 70112,
            fin : 71295
          },
          SClasificar22 = {
            titulo  : 'Sin Clasificar 22',
            tabla : 'SClasificar22',
            contenido : 'AsciiSClasificar22',
            boton : 'cerrarSClasificar22',
            inicio  : 71376,
            fin : 73727
          },
          SClasificar23 = {
            titulo  : 'Sin Clasificar 23',
            tabla : 'SClasificar23',
            contenido : 'AsciiSClasificar23',
            boton : 'cerrarSClasificar23',
            inicio  : 74880,
            fin : 77823
          },
          SClasificar24 = {
            titulo  : 'Sin Clasificar 24',
            tabla : 'SClasificar24',
            contenido : 'AsciiSClasificar24',
            boton : 'cerrarSClasificar24',
            inicio  : 78896,
            fin : 92159
          },
          SClasificar25 = {
            titulo  : 'Sin Clasificar 25',
            tabla : 'SClasificar25',
            contenido : 'AsciiSClasificar25',
            boton : 'cerrarSClasificar25',
            inicio  : 92736,
            fin : 93951
          },
          SClasificar26 = {
            titulo  : 'Sin Clasificar 26',
            tabla : 'SClasificar26',
            contenido : 'AsciiSClasificar26',
            boton : 'cerrarSClasificar26',
            inicio  : 94112,
            fin : 110591
          },
          SClasificar27 = {
            titulo  : 'Sin Clasificar 27',
            tabla : 'SClasificar27',
            contenido : 'AsciiSClasificar27',
            boton : 'cerrarSClasificar27',
            inicio  : 110848,
            fin : 118783
          },
          SClasificar28 = {
            titulo  : 'Sin Clasificar 28',
            tabla : 'SClasificar28',
            contenido : 'AsciiSClasificar28',
            boton : 'cerrarSClasificar28',
            inicio  : 119376,
            fin : 119551
          },
          SClasificar29 = {
            titulo  : 'Sin Clasificar 29',
            tabla : 'SClasificar29',
            contenido : 'AsciiSClasificar29',
            boton : 'cerrarSClasificar29',
            inicio  : 119680,
            fin : 119807
          },
          SClasificar30 = {
            titulo  : 'Sin Clasificar 30',
            tabla : 'SClasificar30',
            contenido : 'AsciiSClasificar30',
            boton : 'cerrarSClasificar30',
            inicio  : 120832,
            fin : 126463
          },
          SClasificar31 = {
            titulo  : 'Sin Clasificar 31',
            tabla : 'SClasificar31',
            contenido : 'AsciiSClasificar31',
            boton : 'cerrarSClasificar31',
            inicio  : 126720,
            fin : 126975
          },
          SClasificar32 = {
            titulo  : 'Sin Clasificar 32',
            tabla : 'SClasificar32',
            contenido : 'AsciiSClasificar32',
            boton : 'cerrarSClasificar32',
            inicio  : 128592,
            fin : 128639
          },
          SClasificar33 = {
            titulo  : 'Sin Clasificar 33',
            tabla : 'SClasificar33',
            contenido : 'AsciiSClasificar33',
            boton : 'cerrarSClasificar33',
            inicio  : 128896,
            fin : 131071
          },
          SClasificar34 = {
            titulo  : 'Sin Clasificar 34',
            tabla : 'SClasificar34',
            contenido : 'AsciiSClasificar34',
            boton : 'cerrarSClasificar34',
            inicio  : 173792,
            fin : 173823
          },
          SClasificar35 = {
            titulo  : 'Sin Clasificar 35',
            tabla : 'SClasificar35',
            contenido : 'AsciiSClasificar35',
            boton : 'cerrarSClasificar35',
            inicio  : 178208,
            fin : 194559
          },
          SClasificar36 = {
            titulo  : 'Sin Clasificar 36',
            tabla : 'SClasificar36',
            contenido : 'AsciiSClasificar36',
            boton : 'cerrarSClasificar36',
            inicio  : 917632,
            fin : 917759
          }
      ]
    }
]