export const HandleEmptyImageUrl = (url='') => {
    const isEmpty = url.length === 0;
    const placeholderImagePath = '/placeholder.png'
    return !isEmpty ? url : placeholderImagePath
}