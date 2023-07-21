// fetch('http://jsonplaceholder.typicode.com/photos?_start=0&&limit=3')

const url = "http://jsonplaceholder.typicode.com/photos?_start=0&&limit=3"

interface Photo {
    albumId: number
    id: number
    title: string
    url: string
    thumbnailUrl: string
}

async function enhancedFetch<ResponseData>(url: string) {
    const res = await fetch(url)
    const data: ResponseData = await res.json();

    return {
      status: res.status,
      data
    };
}

enhancedFetch<Photo[]>(url)
.then(res => {
    res.data.map(item => console.log(item.albumId))
})