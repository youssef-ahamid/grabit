export const serializeClasses = (styles, condition) => {
  return styles
    .filter(s => condition(s))
    .map(_ => _.classes)
    .join(' ')
}

export class api {
  constructor(base_url, options = {}) {
    this.base_url = base_url;
    this.options = options;
  }

  async request(method, url, options) {
    let opts = {
      method: method,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
        ...this.options.headers,
      },
      ...options,
    };

    if (opts.body) opts.body = JSON.stringify(opts.body);
    
    let res = await fetch(this.base_url + url, opts);
    let data = await res.json();

    if (res.status >= 200 && res.status < 300) {
      return data;
    } else {
      let error = new Error(res.statusText);
      error.response = res;
      throw error;
    }
  }


  async get(url = '', options = {}) {
    return this.request('GET', url, options);
  }

  async post(url = '', body = {}, options = {}) {
    options.body = body
    return this.request('POST', url, options);
  }
}


export const is = pair => {
  return pair ? pair[0] == pair[1] : true
}

export const resolve = theme => {
  return theme
    .filter(s => is(s.on))
    .map(_ => _.classes)
    .join(' ')
}

export const stylus = theme => {
  let active = theme.filter(s => s.on)
  return {
    classes: active.map(_ => _.classes).join(' '),
    styles: active.map(_ => _.styles).join(' '),
  }
}

export const getOffset = el => {
  var _x = 0
  var _y = 0
  while (el && !isNaN(el.offsetLeft) && !isNaN(el.offsetTop)) {
    _x += el.offsetLeft - el.scrollLeft
    _y += el.offsetTop - el.scrollTop
    el = el.offsetParent
  }
  return { top: _y, left: _x }
}

export const slugify = text => {
  return text
    .toString()
    .normalize('NFD') // split an accented letter in the base letter and the acent
    .replace(/[\u0300-\u036f]/g, '') // remove all previously split accents
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')
    .replace(/[^\w\-]+/g, '')
    .replace(/\-\-+/g, '-')
}

export const getMonthDate = timestamp => {
  let date = new Date(timestamp)
  return `${date.toLocaleString('default', {
    month: 'long',
  })} ${date.getDate()}, ${date.getFullYear()}`
}

export const createArray = (
  N,
  F = (num) => {
    return num;
  }
) => {
  return [...Array(N).keys()].map((i) => F(i));
};

export const getComponentData = (components, component) => {
  if (components.length == 0 || !Array.isArray(components))
    return null
  let data = components.filter(c => c.__typename == component)
  return data.length > 1 ? data : data[0]
}

export const timeSince = (timestamp, maxDepth = 'seconds') => {
  var date = new Date(timestamp)
  var seconds = Math.floor((new Date() - date) / 1000)
  var interval = Math.floor(seconds / 31536000)
  if (interval > 1 || maxDepth == 'years') {
    return interval + ' years ago'
  }
  interval = Math.floor(seconds / 2592000)
  if (interval > 1 || maxDepth == 'months') {
    return interval + ' months ago'
  }
  interval = Math.floor(seconds / 86400)
  if (interval > 1 || maxDepth == 'days') {
    return interval + ' days ago'
  }
  interval = Math.floor(seconds / 3600)
  if (interval > 1 || maxDepth == 'hours') {
    return interval + ' hours ago'
  }
  interval = Math.floor(seconds / 60)
  if (interval > 1 || maxDepth == 'minutes') {
    return interval + ' minutes ago'
  }
  return Math.floor(seconds) + ' seconds ago'
}
