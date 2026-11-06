const nums1 = [4,9,5];
const nums2 = [9,4,9,8,4];

var intersect = function(nums1, nums2) {
    const intersection = []

    for (let i = 0; i < nums1.length; i++) {
        for (let j = 0; j < nums2.length; j++) {
            if (nums1[i] === nums2[j]) {
                intersection.push(nums1[i])
                nums2.splice(j, 1);
                break;
            }
        }
    }

    return intersection
};

console.log(intersect(nums1, nums2))
console.log(intersect([2, 2], [1, 2]))

const nums3 = [1,2,2,1];
const nums4 = [2,2];

function intersect_2(nums1, nums2) {
    nums1.sort((a, b) => a - b);
    nums2.sort((a, b) => a - b);

    const intersection = [];
    let i = 0;
    let j = 0;

    while (i < nums1.length && j < nums2.length) {
        if (nums1[i] < nums2[j]) {
            i++;
        } else if (nums1[i] > nums2[j]) {
            j++;
        } else {
            intersection.push(nums1[i]);
            i++;
            j++;
        }
    }

    return intersection;
}

console.log(intersect_2(nums3, nums4))