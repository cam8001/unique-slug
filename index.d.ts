/**
 * Generate a unique character string suitable for use in files and URLs.
 * 
 * @param uniq - if passed, return will be a murmur hash of the string.
 * @returns If nothing passed, 4 randomly generated bytes converted into 8 hexadecimal characters.
 */
export default function uniqueSlug(uniq?:string): string
