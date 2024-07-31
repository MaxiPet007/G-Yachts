/* tslint:disable */
/* eslint-disable */
/**
 * This file was automatically generated by Payload.
 * DO NOT MODIFY IT BY HAND. Instead, modify your source Payload config,
 * and re-run `payload generate:types` to regenerate this file.
 */

export interface Config {
  collections: {
    articles: Article;
    media: Media;
    users: User;
    yachts: Yacht;
    charters: Charter;
    categories: Category;
    destinations: Destination;
    events: Event;
    partners: Partner;
    shipyards: Shipyard;
    recruitment: Recruitment;
    'new-constructions': NewConstruction;
    messages: Message;
    'archived-customers': ArchivedCustomer;
    'payload-preferences': PayloadPreference;
    'payload-migrations': PayloadMigration;
  };
  globals: {};
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "articles".
 */
export interface Article {
  id: string;
  title: string;
  category: string | Category;
  date: string;
  author: string | User;
  content: {
    [k: string]: unknown;
  }[];
  image: string | Media;
  seo?:
    | {
        value?: string | null;
        id?: string | null;
      }[]
    | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "categories".
 */
export interface Category {
  id: string;
  title?: string | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "users".
 */
export interface User {
  id: string;
  name: string;
  roles?: ('admin' | 'user')[] | null;
  picture?: string | Media | null;
  position: string;
  phones?:
    | {
        prefix?:
          | (
              | '+93'
              | '+358'
              | '+355'
              | '+213'
              | '+1684'
              | '+376'
              | '+244'
              | '+1264'
              | '+672'
              | '+1268'
              | '+54'
              | '+374'
              | '+297'
              | '+61'
              | '+43'
              | '+994'
              | '+1242'
              | '+973'
              | '+880'
              | '+1246'
              | '+375'
              | '+32'
              | '+501'
              | '+229'
              | '+1441'
              | '+975'
              | '+591'
              | '+387'
              | '+267'
              | '+55'
              | '+246'
              | '+673'
              | '+359'
              | '+226'
              | '+257'
              | '+855'
              | '+237'
              | '+1'
              | '+238'
              | '+ 345'
              | '+236'
              | '+235'
              | '+56'
              | '+86'
              | '+61'
              | '+61'
              | '+57'
              | '+269'
              | '+242'
              | '+243'
              | '+682'
              | '+506'
              | '+225'
              | '+385'
              | '+53'
              | '+357'
              | '+420'
              | '+45'
              | '+253'
              | '+1767'
              | '+1849'
              | '+593'
              | '+20'
              | '+503'
              | '+240'
              | '+291'
              | '+372'
              | '+251'
              | '+500'
              | '+298'
              | '+679'
              | '+358'
              | '+33'
              | '+594'
              | '+689'
              | '+241'
              | '+220'
              | '+995'
              | '+49'
              | '+233'
              | '+350'
              | '+30'
              | '+299'
              | '+1473'
              | '+590'
              | '+1671'
              | '+502'
              | '+44'
              | '+224'
              | '+245'
              | '+595'
              | '+509'
              | '+379'
              | '+504'
              | '+852'
              | '+36'
              | '+354'
              | '+91'
              | '+62'
              | '+98'
              | '+964'
              | '+353'
              | '+44'
              | '+972'
              | '+39'
              | '+1876'
              | '+81'
              | '+44'
              | '+962'
              | '+77'
              | '+254'
              | '+686'
              | '+850'
              | '+82'
              | '+965'
              | '+996'
              | '+856'
              | '+371'
              | '+961'
              | '+266'
              | '+231'
              | '+218'
              | '+423'
              | '+370'
              | '+352'
              | '+853'
              | '+389'
              | '+261'
              | '+265'
              | '+60'
              | '+960'
              | '+223'
              | '+356'
              | '+692'
              | '+596'
              | '+222'
              | '+230'
              | '+262'
              | '+52'
              | '+691'
              | '+373'
              | '+377'
              | '+976'
              | '+382'
              | '+1664'
              | '+212'
              | '+258'
              | '+95'
              | '+264'
              | '+674'
              | '+977'
              | '+31'
              | '+599'
              | '+687'
              | '+64'
              | '+505'
              | '+227'
              | '+234'
              | '+683'
              | '+672'
              | '+1670'
              | '+47'
              | '+968'
              | '+92'
              | '+680'
              | '+970'
              | '+507'
              | '+675'
              | '+595'
              | '+51'
              | '+63'
              | '+872'
              | '+48'
              | '+351'
              | '+1939'
              | '+974'
              | '+40'
              | '+7'
              | '+250'
              | '+262'
              | '+590'
              | '+290'
              | '+1869'
              | '+1758'
              | '+590'
              | '+508'
              | '+1784'
              | '+685'
              | '+378'
              | '+239'
              | '+966'
              | '+221'
              | '+381'
              | '+248'
              | '+232'
              | '+65'
              | '+421'
              | '+386'
              | '+677'
              | '+252'
              | '+27'
              | '+211'
              | '+500'
              | '+34'
              | '+94'
              | '+249'
              | '+597'
              | '+47'
              | '+268'
              | '+46'
              | '+41'
              | '+963'
              | '+886'
              | '+992'
              | '+255'
              | '+66'
              | '+670'
              | '+228'
              | '+690'
              | '+676'
              | '+1868'
              | '+216'
              | '+90'
              | '+993'
              | '+1649'
              | '+688'
              | '+256'
              | '+380'
              | '+971'
              | '+44'
              | '+1'
              | '+598'
              | '+998'
              | '+678'
              | '+58'
              | '+84'
              | '+1284'
              | '+1340'
              | '+681'
              | '+967'
              | '+260'
              | '+263'
            )
          | null;
        number?: string | null;
        id?: string | null;
      }[]
    | null;
  langs?:
    | (
        | 'Afar'
        | 'Abkhazian'
        | 'Avestan'
        | 'Afrikaans'
        | 'Akan'
        | 'Amharic'
        | 'Aragonese'
        | 'Arabic'
        | 'Assamese'
        | 'Avaric'
        | 'Aymara'
        | 'Azerbaijani'
        | 'Bashkir'
        | 'Belarusian'
        | 'Bulgarian'
        | 'Bihari languages'
        | 'Bislama'
        | 'Bambara'
        | 'Bengali'
        | 'Tibetan'
        | 'Breton'
        | 'Bosnian'
        | 'Catalan'
        | 'Chechen'
        | 'Chamorro'
        | 'Corsican'
        | 'Cree'
        | 'Czech'
        | 'Church Slavic'
        | 'Chuvash'
        | 'Welsh'
        | 'Danish'
        | 'German'
        | 'Maldivian'
        | 'Dzongkha'
        | 'Ewe'
        | 'Greek'
        | 'English'
        | 'Esperanto'
        | 'Spanish'
        | 'Estonian'
        | 'Basque'
        | 'Persian'
        | 'Fulah'
        | 'Finnish'
        | 'Fijian'
        | 'Faroese'
        | 'French'
        | 'Western Frisian'
        | 'Irish'
        | 'Gaelic'
        | 'Galician'
        | 'Guarani'
        | 'Gujarati'
        | 'Manx'
        | 'Hausa'
        | 'Hebrew'
        | 'Hindi'
        | 'Hiri Motu'
        | 'Croatian'
        | 'Haitian'
        | 'Hungarian'
        | 'Armenian'
        | 'Herero'
        | 'Interlingua'
        | 'Indonesian'
        | 'Interlingue'
        | 'Igbo'
        | 'Sichuan Yi'
        | 'Inupiaq'
        | 'Ido'
        | 'Icelandic'
        | 'Italian'
        | 'Inuktitut'
        | 'Japanese'
        | 'Javanese'
        | 'Georgian'
        | 'Kongo'
        | 'Kikuyu'
        | 'Kuanyama'
        | 'Kazakh'
        | 'Kalaallisut'
        | 'Central Khmer'
        | 'Kannada'
        | 'Korean'
        | 'Kanuri'
        | 'Kashmiri'
        | 'Kurdish'
        | 'Komi'
        | 'Cornish'
        | 'Kirghiz'
        | 'Latin'
        | 'Luxembourgish'
        | 'Ganda'
        | 'Limburgan'
        | 'Lingala'
        | 'Lao'
        | 'Lithuanian'
        | 'Luba-Katanga'
        | 'Latvian'
        | 'Malagasy'
        | 'Marshallese'
        | 'Maori'
        | 'Macedonian'
        | 'Malayalam'
        | 'Mongolian'
        | 'Marathi'
        | 'Malay'
        | 'Maltese'
        | 'Burmese'
        | 'Nauru'
        | 'Norwegian'
        | 'North Ndebele'
        | 'Nepali'
        | 'Ndonga'
        | 'Dutch'
        | 'Norwegian'
        | 'Norwegian'
        | 'South Ndebele'
        | 'Navajo'
        | 'Chichewa'
        | 'Occitan'
        | 'Ojibwa'
        | 'Oromo'
        | 'Oriya'
        | 'Ossetic'
        | 'Panjabi'
        | 'Pali'
        | 'Polish'
        | 'Pushto'
        | 'Portuguese'
        | 'Quechua'
        | 'Romansh'
        | 'Rundi'
        | 'Romanian'
        | 'Russian'
        | 'Kinyarwanda'
        | 'Sanskrit'
        | 'Sardinian'
        | 'Sindhi'
        | 'Northern Sami'
        | 'Sango'
        | 'Sinhala'
        | 'Slovak'
        | 'Slovenian'
        | 'Samoan'
        | 'Shona'
        | 'Somali'
        | 'Albanian'
        | 'Serbian'
        | 'Swati'
        | 'Sotho, Southern'
        | 'Sundanese'
        | 'Swedish'
        | 'Swahili'
        | 'Tamil'
        | 'Telugu'
        | 'Tajik'
        | 'Thai'
        | 'Tigrinya'
        | 'Turkmen'
        | 'Tagalog'
        | 'Tswana'
        | 'Tonga'
        | 'Turkish'
        | 'Tsonga'
        | 'Tatar'
        | 'Twi'
        | 'Tahitian'
        | 'Uighur'
        | 'Ukrainian'
        | 'Urdu'
        | 'Uzbek'
        | 'Venda'
        | 'Vietnamese'
        | 'Volapük'
        | 'Walloon'
        | 'Wolof'
        | 'Xhosa'
        | 'Yiddish'
        | 'Yoruba'
        | 'Zhuang'
        | 'Chinese'
        | 'Zulu'
      )[]
    | null;
  socials?:
    | {
        platform: 'WhatsApp' | 'Facebook' | 'LinkedIn';
        link: string;
        id?: string | null;
      }[]
    | null;
  displayOnWebsite?: boolean | null;
  updatedAt: string;
  createdAt: string;
  email: string;
  resetPasswordToken?: string | null;
  resetPasswordExpiration?: string | null;
  salt?: string | null;
  hash?: string | null;
  loginAttempts?: number | null;
  lockUntil?: string | null;
  password: string | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "media".
 */
export interface Media {
  id: string;
  alt?: string | null;
  updatedAt: string;
  createdAt: string;
  url?: string | null;
  filename?: string | null;
  mimeType?: string | null;
  filesize?: number | null;
  width?: number | null;
  height?: number | null;
  focalX?: number | null;
  focalY?: number | null;
  sizes?: {
    thumbnail?: {
      url?: string | null;
      width?: number | null;
      height?: number | null;
      mimeType?: string | null;
      filesize?: number | null;
      filename?: string | null;
    };
    fhd?: {
      url?: string | null;
      width?: number | null;
      height?: number | null;
      mimeType?: string | null;
      filesize?: number | null;
      filename?: string | null;
    };
  };
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "yachts".
 */
export interface Yacht {
  id: string;
  name: string;
  model?: string | null;
  price: number;
  LOA: number;
  beam: number;
  broker: string | User;
  builder: string;
  category?: string | null;
  city?: string | null;
  continent?: string | null;
  country?: string | null;
  cruising: boolean;
  crypto: boolean;
  length: number;
  state?: string | null;
  material: string;
  maxDraft: number;
  minDraft: number;
  region?: string | null;
  rooms: number;
  sleeps: number;
  subcategory?: string | null;
  tonnage: number;
  yearBuilt: number;
  yearModel: number;
  featured: boolean;
  keyFeatures: (
    | 'price'
    | 'LOA'
    | 'beam'
    | 'builder'
    | 'category'
    | 'crusing'
    | 'crypto'
    | 'length'
    | 'maxDraft'
    | 'minDraft'
    | 'rooms'
    | 'sleeps'
    | 'subcategory'
    | 'tonnage'
    | 'yearBuilt'
    | 'yearModel'
  )[];
  etiquette?: ('new' | 'exclusive' | 'sold') | null;
  photos: {
    featured: string | Media;
    gallery?:
      | {
          image: string | Media;
          id?: string | null;
        }[]
      | null;
  };
  description?: string | null;
  brochure?: (string | null) | Media;
  clicks?: number | null;
  seo?:
    | {
        value?: string | null;
        id?: string | null;
      }[]
    | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "charters".
 */
export interface Charter {
  id: string;
  name: string;
  model?: string | null;
  price?: {
    low?: number | null;
    high?: number | null;
  };
  LOA: number;
  beam: number;
  broker: string | User;
  builder: string;
  category?: string | null;
  city?: string | null;
  continent?: string | null;
  country?: string | null;
  cruising: boolean;
  crypto: boolean;
  length: number;
  state?: string | null;
  material: string;
  maxDraft: number;
  minDraft: number;
  region?: string | null;
  rooms: number;
  sleeps: number;
  subcategory?: string | null;
  tonnage: number;
  yearBuilt: number;
  yearModel: number;
  featured: boolean;
  keyFeatures: (
    | 'price'
    | 'LOA'
    | 'beam'
    | 'builder'
    | 'category'
    | 'crusing'
    | 'crypto'
    | 'length'
    | 'maxDraft'
    | 'minDraft'
    | 'rooms'
    | 'sleeps'
    | 'subcategory'
    | 'tonnage'
    | 'yearBuilt'
    | 'yearModel'
  )[];
  etiquette?: ('new' | 'exclusive' | 'sold') | null;
  photos: {
    featured: string | Media;
    gallery?:
      | {
          image: string | Media;
          id?: string | null;
        }[]
      | null;
  };
  description?: string | null;
  brochure?: (string | null) | Media;
  clicks?: number | null;
  seo?:
    | {
        value?: string | null;
        id?: string | null;
      }[]
    | null;
  reservations?:
    | {
        from: string;
        to?: string | null;
        customerName?: string | null;
        customer?: (string | null) | ArchivedCustomer;
        id?: string | null;
      }[]
    | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "archived-customers".
 */
export interface ArchivedCustomer {
  id: string;
  closureDate: string;
  name: string;
  email: string;
  tel?: string | null;
  message: string;
  page?: string | null;
  status?: ('pending' | 'claimed' | 'fulfilled') | null;
  user?: (string | null) | User;
  newsletter?: boolean | null;
  closed?: boolean | null;
  dealPrice?: number | null;
  type?: ('charter' | 'sale') | null;
  yacht?: {
    name?: string | null;
    model?: string | null;
    price?: number | null;
    broker?: (string | null) | User;
    builder?: string | null;
    city?: string | null;
    continent?: string | null;
    country?: string | null;
    state?: string | null;
    region?: string | null;
    yearBuilt?: number | null;
    yearModel?: number | null;
  };
  charter?: {
    name?: string | null;
    model?: string | null;
    price?: {
      low?: number | null;
      high?: number | null;
    };
    broker?: (string | null) | User;
    builder?: string | null;
    city?: string | null;
    continent?: string | null;
    country?: string | null;
    state?: string | null;
    region?: string | null;
    yearBuilt?: number | null;
    yearModel?: number | null;
  };
  charterDates?: {
    from?: string | null;
    to?: string | null;
  };
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "destinations".
 */
export interface Destination {
  id: string;
  destination: string;
  country: string;
  region: string;
  continent: string;
  photos: {
    featured: string | Media;
    destinationPhoto: string | Media;
  };
  description: {
    [k: string]: unknown;
  }[];
  info: {
    bestTimeToVisit: string;
    languages: string;
    gettingThere: string;
    currency: string;
  };
  /**
   * @minItems 2
   * @maxItems 2
   */
  coordinates?: [number, number] | null;
  seo?:
    | {
        value?: string | null;
        id?: string | null;
      }[]
    | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "events".
 */
export interface Event {
  id: string;
  title: string;
  fromDate: string;
  toDate: string;
  location?: {
    city?: string | null;
    country?: string | null;
    destination?: (string | null) | Destination;
  };
  content?:
    | {
        [k: string]: unknown;
      }[]
    | null;
  image: string | Media;
  seo?:
    | {
        value?: string | null;
        id?: string | null;
      }[]
    | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "partners".
 */
export interface Partner {
  id: string;
  name: string;
  comment: string;
  website?: string | null;
  logo: string | Media;
  banner: string | Media;
  seo?:
    | {
        value?: string | null;
        id?: string | null;
      }[]
    | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "shipyards".
 */
export interface Shipyard {
  id: string;
  name: string;
  quote: string;
  website: string;
  logo: string | Media;
  banner: string | Media;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "recruitment".
 */
export interface Recruitment {
  id: string;
  title: string;
  description: {
    [k: string]: unknown;
  }[];
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "new-constructions".
 */
export interface NewConstruction {
  id: string;
  delivery: string;
  name: string;
  model?: string | null;
  price: number;
  LOA: number;
  beam: number;
  broker: string | User;
  builder: string;
  category?: string | null;
  city?: string | null;
  continent?: string | null;
  country?: string | null;
  cruising: boolean;
  crypto: boolean;
  length: number;
  state?: string | null;
  material: string;
  maxDraft: number;
  minDraft: number;
  region?: string | null;
  rooms: number;
  sleeps: number;
  subcategory?: string | null;
  tonnage: number;
  yearBuilt: number;
  yearModel: number;
  featured: boolean;
  keyFeatures: (
    | 'price'
    | 'LOA'
    | 'beam'
    | 'builder'
    | 'category'
    | 'crusing'
    | 'crypto'
    | 'length'
    | 'maxDraft'
    | 'minDraft'
    | 'rooms'
    | 'sleeps'
    | 'subcategory'
    | 'tonnage'
    | 'yearBuilt'
    | 'yearModel'
  )[];
  etiquette?: ('new' | 'exclusive' | 'sold') | null;
  photos: {
    featured: string | Media;
    gallery?:
      | {
          image: string | Media;
          id?: string | null;
        }[]
      | null;
  };
  description?: string | null;
  brochure?: (string | null) | Media;
  clicks?: number | null;
  seo?:
    | {
        value?: string | null;
        id?: string | null;
      }[]
    | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "messages".
 */
export interface Message {
  id: string;
  name: string;
  email: string;
  tel?: string | null;
  message: string;
  page?: string | null;
  status?: ('pending' | 'claimed' | 'fulfilled') | null;
  user?: (string | null) | User;
  newsletter?: boolean | null;
  closed?: boolean | null;
  type?: ('charter' | 'sale') | null;
  yacht?: (string | null) | Yacht;
  charter?: (string | null) | Charter;
  dealPrice?: number | null;
  charterDates?: {
    from?: string | null;
    to?: string | null;
  };
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-preferences".
 */
export interface PayloadPreference {
  id: string;
  user: {
    relationTo: 'users';
    value: string | User;
  };
  key?: string | null;
  value?:
    | {
        [k: string]: unknown;
      }
    | unknown[]
    | string
    | number
    | boolean
    | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-migrations".
 */
export interface PayloadMigration {
  id: string;
  name?: string | null;
  batch?: number | null;
  updatedAt: string;
  createdAt: string;
}


declare module 'payload' {
  export interface GeneratedTypes extends Config {}
}