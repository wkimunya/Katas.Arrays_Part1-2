function findIndexOfSubArray(arr) {
    const n = arr.length;

    // To confirm if the array provided is already sorted
    if (
        arr.every((value, index) => index === 0 || value >= arr[index - 1]) ||
        arr.every((value, index) => index === 0 || value <= arr[index - 1])
    ) {
        return [0, 0];
    }

    // Find the left bound of the unsorted subarray
    let left = 0;
    while (left < n - 1 && arr[left] <= arr[left + 1]) {
        left++;
    }

    // Check if the array is already sorted in descending order
    if (left === n - 1) {
        return [0, 0];
    }
    let right = n - 1;
    while (right > 0 && arr[right] >= arr[right - 1]) {
        right--;
    }

    // Find the minimum and maximum values in the unsorted subarray
    const subarrayMin = Math.min(...arr.slice(left, right + 1));
    const subarrayMax = Math.max(...arr.slice(left, right + 1));

    // Expand the left bound to include any elements smaller than the minimum
    while (left >= 0 && arr[left] > subarrayMin) {
        left--;
    }

    // Expand the right bound to include any elements larger than the maximum
    while (right < n && arr[right] < subarrayMax) {
        right++;
    }

    return [left + 1, right - 1];
}

