/**
 * @param {string} id 
 * @param {string} name 
 * @param {string} placeholder 
 * @param {Boolean} required 
 */

module.exports = (id, name, placeholder, required) => {
    return `
    class="base-input"
    id="${id}"
    name="${name}"
    type="number"
    placeholder="${placeholder}"
    ${ required ? "required" : ""}
    `
}