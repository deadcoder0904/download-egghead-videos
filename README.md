# Download Videos from Egghead for Free (HACK)

### Install

1. [Node JS](https://nodejs.org)

2. [React DevTools](https://github.com/facebook/react-devtools)

3. [ffmpeg](https://www.ffmpeg.org/)

### Step 1 :

Go to any Course url that has path `/courses`

Example - https://egghead.io/courses/advanced-react-component-patterns

### Step 2 :

Enter `inject-t-with-contentListStore` in React DevTools `Search`

### Step 3 :

Enter the following in the `Developer Console`

```js
var egghead = [];
$r.context.mobxStores.courseInfoStore.courseLessons.map(course =>
  egghead.push({
    title: course.title,
    url: course.media_urls.hls_url
  })
);
copy(egghead);
```

### Step 4 :

Replace the contents of the variable `egghead` with the above content

### Step 5 :

Enter `npm install` in the given folder

### Step 6 :

Enter `node index.js` to download all the videos for free
