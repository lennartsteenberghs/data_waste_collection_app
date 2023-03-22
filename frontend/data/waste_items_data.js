const wasteItemData = [
  {
    id: 1,
    imgCount: 2,
    content: [{id: 1, img: "image1.png", text: "this is image 1"},{id: 2, img: "image2.png", text: "this is image 2"}],
    name: { en: "Small plastic bottle", nl: "Kleine plastic fles", aw: "Papiamento fles", es: "Poquito fles" },
    subName: '(< 550 ml)',
    mustBeRecycled: true,
    count: 0
  },
  {
    id: 2,
    imgCount: 1,
    content: [{id: 1, img: "image1.png", text: "this is image 1"}],
    name: { en: "Big plastic bottle", nl: "Big plastic bottle", aw: "Big plastic bottle", es: "Big plastic bottle" },
    subName: '(> 550 ml)',
    mustBeRecycled: true,
    count: 0
  },
  {
    id: 3,
    imgCount: 2,
    content: [{id: 1, img: "image1.png", text: "this is image 1"},{id: 2, img: "image2.png", text: "this is image 2"}],
    name: { en: "Small can", nl: "Small can", aw: "Small can", es: "Small can" },
    subName: '(< 500 ml)',
    mustBeRecycled: true,
    count: 0
  },
  {
    id: 4,
    imgCount: 1,
    content: [{id: 1, img: "image1.png", text: "this is image 1"}],
    name: { en: "Big can", nl: "Big can", aw: "Big can", es: "Big can" },
    subName: '(> 500 ml)',
    mustBeRecycled: true,
    count: 0
  },
  {
    id: 5,
    imgCount: 1,
    content: [{id: 1, img: "image1.png", text: "this is image 1"}],
    name: { en: "Other recyclabes", nl: "Other recyclabes", aw: "Other recyclabes", es: "Other recyclabes" },
    subName: '',
    mustBeRecycled: true,
    count: 0
  },
  {
    id: 6,
    imgCount: 1,
    content: [{id: 1, img: "image1.png", text: "this is image 1"}],
    name: { en: "Paper cup", nl: "Paper cup", aw: "Paper cup", es: "Paper cup" },
    subName: '',
    mustBeRecycled: false,
    count: 0
  },
  {
    id: 7,
    imgCount: 1,
    content: [{id: 1, img: "image1.png", text: "this is image 1"}],
    name: { en: "Food box", nl: "Food box", aw: "Food box", es: "Food box" },
    subName: '',
    mustBeRecycled: false,
    count: 0
  },
  {
    id: 8,
    imgCount: 1,
    content: [{id: 1, img: "image1.png", text: "this is image 1"}],
    name: { en: "Organic waste", nl: "Organic waste", aw: "Organic waste", es: "Organic waste" },
    subName: '',
    mustBeRecycled: false,
    count: 0
  },
  {
    id: 9,
    imgCount: 1,
    content: [{id: 1, img: "image1.png", text: "this is image 1"}],
    name: { en: "Glass", nl: "Glass", aw: "Glass", es: "Glass" },
    subName: '',
    mustBeRecycled: false,
    count: 0
  },
  {
    id: 10,
    imgCount: 1,
    content: [{id: 1, img: "image1.png", text: "this is image 1"}],
    name: { en: "Other non-recyclabes", nl: "Other non-recyclabes", aw: "Other non-recyclabes", es: "Other non-recyclabes" },
    subName: '',
    mustBeRecycled: false,
    count: 0
  },
]

export default wasteItemData
