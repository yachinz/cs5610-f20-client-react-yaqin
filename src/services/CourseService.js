
const url = "https://wbdv-generic-server.herokuapp.com/api/yaqin/courses"

export const findCourseById = (id) =>
  fetch(`${url}/${id}`)
    .then(response => response.json())

export const findAllCourses = () =>
  fetch(url)
    .then(response => response.json())

export const createCourse = (course) =>
  fetch(url, {
    method: 'POST',
    body: JSON.stringify(course),
    headers: {
      'content-type': 'application/json'
    }
  })
    .then(response => response.json())

export const deleteCourse = (courseId) =>
  fetch(`${url}/${courseId}`, {
    method: 'DELETE'
  })
    .then(response => response.json())

export const updateCourse = (id, course) =>
  fetch(`${url}/${id}`, {
    method: 'PUT',
    body: JSON.stringify(course),
    headers: {
      'content-type': 'application/json'
    }
  })
    .then(response => response.json())

