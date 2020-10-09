export default {
  "index": [
    "0x00",
    "0x01",
    "0x02",
    "0x03",
    "0x04",
    "0x05",
    "0x06",
    "0x07",
    "0x08",
    "0x09",
    "0x0A",
    "0x0B",
    "0x0C",
    "0x0D"
  ],
  "data": {
    "0x00": {
      "beCode": "function render (input) {\n  return '<div>' + input + '</div>'\n}",
      "title": "simple"
    },
    "0x01": {
      "beCode": "function render (input) {\n  return '<textarea>' + input + '</textarea>'\n}",
      "title": "textarea"
    },
    "0x02": {
      "beCode": "function render (input) {\n  return '<input type=\"name\" value=\"' + input + '\">'\n}",
      "title": "input"
    },
    "0x03": {
      "beCode": "function render (input) {\n  const stripBracketsRe = /[()]/g\n  input = input.replace(stripBracketsRe, '')\n  return input\n}",
      "title": "strip brackets"
    },
    "0x04": {
      "beCode": "function render (input) {\n  const stripBracketsRe = /[()`]/g\n  input = input.replace(stripBracketsRe, '')\n  return input\n}",
      "title": "strip brackets"
    },
    "0x05": {
      "beCode": "function render (input) {\n  input = input.replace(/-->/g, '😂')\n  return '<!--' + input + '-->'\n}",
      "title": "comment"
    },
    "0x06": {
      "beCode": "function render (input) {\n  const stripTagsRe = /<\\/?[^>]+>/gi\n\n  input = input.replace(stripTagsRe, '')\n  return `<article>${input}</article>`\n}",
      "title": "strip tag"
    },
    "0x07": {
      "beCode": "function render (input) {\n  let domainRe = /^https?:\\/\\/www\\.segmentfault\\.com/\n  if (domainRe.test(input)) {\n    return `<script src=\"${input}\"></script>`\n  }\n  return 'Invalid URL'\n}",
      "title": "url 1"
    },
    "0x08": {
      "beCode": "function render (input) {\n  function escapeHtml(s) {\n    return s.replace(/&/g, '&amp;')\n            .replace(/'/g, '&#39;')\n            .replace(/\"/g, '&quot;')\n            .replace(/</g, '&lt;')\n            .replace(/>/g, '&gt;')\n  }\n\n  let domainRe = /^https?:\\/\\/www\\.segmentfault\\.com/\n  if (domainRe.test(input)) {\n    return `<script src=\"${escapeHtml(input)}\"></script>`\n  }\n  return 'Invalid URL'\n}",
      "title": "url 2"
    },
    "0x09": {
      "beCode": "function render (input) {\n  input = input.replace(/[\\n</\"']/g, '')\n  return `\n    <script>\n          // alert('${input}')\n    </script>\n  `\n}",
      "title": "line-break"
    },
    "0x0A": {
      "beCode": "function render (input) {\n  input = input.toUpperCase()\n  return `<h1>${input}</h1>`\n}",
      "title": "a0"
    },
    "0x0B": {
      "beCode": "function render (input) {\n  input = input.replace(/script/g, '')\n  input = input.toUpperCase()\n  return '<h1>' + input + '</h1>'\n}",
      "title": "a1"
    },
    "0x0C": {
      "beCode": "function render (input) {\n  input = input.replace(/<([a-zA-Z])/g, '<_$1')\n  input = input.toUpperCase()\n  return '<h1>' + input + '</h1>'\n}",
      "title": "a2"
    },
    "0x0D": {
      "beCode": "function render (input) {\n  function escapeHtml(s) {\n    return s.replace(/&/g, '&amp;')\n            .replace(/'/g, '&#39;')\n            .replace(/\"/g, '&quot;')\n            .replace(/</g, '&lt;')\n            .replace(/>/g, '&gt;')\n  }\n  return `<a href=\"\" onclick=\"alert('${escapeHtml(input)}')\"></a>`\n}",
      "title": "html"
    }
  }
}
