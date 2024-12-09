export function formatDate(date: string | Date): string {
  const d = new Date(date)
  return new Intl.DateTimeFormat('zh-CN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }).format(d)
}

export function timeAgo(date: string | Date): string {
  const now = new Date()
  const past = new Date(date)
  const msPerMinute = 60 * 1000
  const msPerHour = msPerMinute * 60
  const msPerDay = msPerHour * 24
  const msPerMonth = msPerDay * 30
  const msPerYear = msPerDay * 365

  const elapsed = now.getTime() - past.getTime()

  if (elapsed < msPerMinute) {
    return '刚刚'
  } else if (elapsed < msPerHour) {
    return `${Math.round(elapsed / msPerMinute)} 分钟前`
  } else if (elapsed < msPerDay) {
    return `${Math.round(elapsed / msPerHour)} 小时前`
  } else if (elapsed < msPerMonth) {
    return `${Math.round(elapsed / msPerDay)} 天前`
  } else if (elapsed < msPerYear) {
    return `${Math.round(elapsed / msPerMonth)} 个月前`
  } else {
    return `${Math.round(elapsed / msPerYear)} 年前`
  }
} 