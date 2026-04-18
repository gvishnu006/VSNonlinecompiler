export interface Problem {
  id: string;
  title: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  languageIds: string[];
  category: string;
  description: string;
  constraints: string[];
  examples: Example[];
  hint: string;
  starterCode: Record<string, string>;
}

export interface Example {
  input: string;
  output: string;
  explanation?: string;
}

export const PROBLEMS: Problem[] = [
  {
    id: 'hello-world',
    title: 'Hello World',
    difficulty: 'Easy',
    languageIds: ['python3', 'javascript', 'java', 'cpp', 'c', 'go', 'rust', 'kotlin', 'swift'],
    category: 'Basics',
    description: 'Write a program that prints "Hello, World!" to the standard output.',
    constraints: ['No input is required', 'Output must be exactly: Hello, World!'],
    examples: [
      { input: '', output: 'Hello, World!' },
    ],
    hint: 'Use print(), console.log(), System.out.println(), or the equivalent for your language.',
    starterCode: {
      python3: 'print("Hello, World!")',
      javascript: 'console.log("Hello, World!");',
      java: 'public class Main {\n    public static void main(String[] args) {\n        // Your code here\n    }\n}',
      cpp: '#include <iostream>\nusing namespace std;\nint main() {\n    // Your code here\n    return 0;\n}',
    },
  },
  {
    id: 'two-sum',
    title: 'Two Sum',
    difficulty: 'Easy',
    languageIds: ['python3', 'javascript', 'java', 'cpp'],
    category: 'Arrays',
    description: 'Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target. You may assume that each input would have exactly one solution.',
    constraints: ['2 <= nums.length <= 10^4', '-10^9 <= nums[i] <= 10^9', 'Only one valid answer exists'],
    examples: [
      { input: 'nums = [2, 7, 11, 15], target = 9', output: '[0, 1]', explanation: 'nums[0] + nums[1] = 2 + 7 = 9' },
      { input: 'nums = [3, 2, 4], target = 6', output: '[1, 2]' },
    ],
    hint: 'Use a hash map to store complement values as you iterate.',
    starterCode: {
      python3: 'def twoSum(nums, target):\n    # Your solution here\n    pass\n\n# Test\nprint(twoSum([2,7,11,15], 9))',
      javascript: 'function twoSum(nums, target) {\n    // Your solution here\n}\n\nconsole.log(twoSum([2,7,11,15], 9));',
      java: 'import java.util.*;\npublic class Main {\n    public int[] twoSum(int[] nums, int target) {\n        // Your solution here\n        return new int[]{};\n    }\n}',
      cpp: '#include <iostream>\n#include <vector>\n#include <unordered_map>\nusing namespace std;\nvector<int> twoSum(vector<int>& nums, int target) {\n    // Your solution here\n    return {};\n}',
    },
  },
  {
    id: 'fibonacci',
    title: 'Fibonacci Sequence',
    difficulty: 'Easy',
    languageIds: ['python3', 'javascript', 'java', 'cpp', 'go', 'rust'],
    category: 'Recursion',
    description: 'Given a number n, return the nth Fibonacci number. The Fibonacci sequence starts with 0, 1, 1, 2, 3, 5, 8...',
    constraints: ['0 <= n <= 30'],
    examples: [
      { input: 'n = 5', output: '5', explanation: 'F(5) = F(4) + F(3) = 3 + 2 = 5' },
      { input: 'n = 10', output: '55' },
    ],
    hint: 'You can solve this recursively, iteratively, or using dynamic programming.',
    starterCode: {
      python3: 'def fibonacci(n):\n    # Your solution here\n    pass\n\nprint(fibonacci(10))',
      javascript: 'function fibonacci(n) {\n    // Your solution here\n}\n\nconsole.log(fibonacci(10));',
    },
  },
  {
    id: 'palindrome',
    title: 'Check Palindrome',
    difficulty: 'Easy',
    languageIds: ['python3', 'javascript', 'java', 'cpp', 'go'],
    category: 'Strings',
    description: 'Given a string s, return true if it is a palindrome, or false otherwise. A palindrome reads the same backward as forward.',
    constraints: ['1 <= s.length <= 2 * 10^5', 's consists only of printable ASCII characters'],
    examples: [
      { input: 's = "racecar"', output: 'true' },
      { input: 's = "hello"', output: 'false' },
    ],
    hint: 'Compare the string with its reverse, or use two pointers from each end.',
    starterCode: {
      python3: 'def isPalindrome(s):\n    # Your solution here\n    pass\n\nprint(isPalindrome("racecar"))\nprint(isPalindrome("hello"))',
      javascript: 'function isPalindrome(s) {\n    // Your solution here\n}\n\nconsole.log(isPalindrome("racecar"));\nconsole.log(isPalindrome("hello"));',
    },
  },
  {
    id: 'reverse-string',
    title: 'Reverse a String',
    difficulty: 'Easy',
    languageIds: ['python3', 'javascript', 'java', 'cpp', 'ruby'],
    category: 'Strings',
    description: 'Write a function that reverses a string. The input string is given as an array of characters s.',
    constraints: ['1 <= s.length <= 10^5'],
    examples: [
      { input: 's = "hello"', output: '"olleh"' },
      { input: 's = "Hannah"', output: '"hannaH"' },
    ],
    hint: 'Use built-in reverse functions or implement a two-pointer swap approach.',
    starterCode: {
      python3: 'def reverseString(s):\n    # Your solution here\n    pass\n\nprint(reverseString("hello"))',
      javascript: 'function reverseString(s) {\n    // Your solution here\n}\n\nconsole.log(reverseString("hello"));',
    },
  },
  {
    id: 'binary-search',
    title: 'Binary Search',
    difficulty: 'Medium',
    languageIds: ['python3', 'javascript', 'java', 'cpp', 'go'],
    category: 'Search',
    description: 'Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, return its index. Otherwise, return -1.',
    constraints: ['1 <= nums.length <= 10^4', 'All integers in nums are unique', 'nums is sorted in ascending order'],
    examples: [
      { input: 'nums = [-1,0,3,5,9,12], target = 9', output: '4' },
      { input: 'nums = [-1,0,3,5,9,12], target = 2', output: '-1' },
    ],
    hint: 'Use left and right pointers, compare mid value with target to decide which half to search.',
    starterCode: {
      python3: 'def search(nums, target):\n    # Your solution here\n    pass\n\nprint(search([-1,0,3,5,9,12], 9))',
      javascript: 'function search(nums, target) {\n    // Your solution here\n}\n\nconsole.log(search([-1,0,3,5,9,12], 9));',
    },
  },
  {
    id: 'merge-sorted',
    title: 'Merge Two Sorted Arrays',
    difficulty: 'Medium',
    languageIds: ['python3', 'javascript', 'java', 'cpp'],
    category: 'Arrays',
    description: 'Given two sorted integer arrays nums1 and nums2, merge them into one sorted array.',
    constraints: ['0 <= nums1.length, nums2.length <= 200', '-10^9 <= nums1[i], nums2[i] <= 10^9'],
    examples: [
      { input: 'nums1 = [1,2,3], nums2 = [2,5,6]', output: '[1,2,2,3,5,6]' },
    ],
    hint: 'Use two pointers, one for each array, and build the result by comparing elements.',
    starterCode: {
      python3: 'def mergeSorted(nums1, nums2):\n    # Your solution here\n    pass\n\nprint(mergeSorted([1,2,3], [2,5,6]))',
      javascript: 'function mergeSorted(nums1, nums2) {\n    // Your solution here\n}\n\nconsole.log(mergeSorted([1,2,3], [2,5,6]));',
    },
  },
  {
    id: 'lru-cache',
    title: 'LRU Cache',
    difficulty: 'Hard',
    languageIds: ['python3', 'javascript', 'java', 'cpp'],
    category: 'Design',
    description: 'Design a data structure that follows the constraints of a Least Recently Used (LRU) cache. Implement the LRUCache class with get() and put() operations, both in O(1) time.',
    constraints: ['1 <= capacity <= 3000', '0 <= key <= 10^4', 'get and put should both run in O(1) time'],
    examples: [
      { input: 'capacity = 2\nput(1, 1), put(2, 2), get(1) → 1, put(3, 3), get(2) → -1', output: '1, -1' },
    ],
    hint: 'Combine a HashMap with a Doubly Linked List for O(1) access and O(1) reordering.',
    starterCode: {
      python3: 'class LRUCache:\n    def __init__(self, capacity):\n        # Initialize your data structure here\n        pass\n\n    def get(self, key):\n        pass\n\n    def put(self, key, value):\n        pass\n\ncache = LRUCache(2)\ncache.put(1, 1)\ncache.put(2, 2)\nprint(cache.get(1))',
      javascript: 'class LRUCache {\n    constructor(capacity) {\n        // Initialize\n    }\n\n    get(key) {}\n\n    put(key, value) {}\n}\n\nconst cache = new LRUCache(2);\ncache.put(1, 1);\ncache.put(2, 2);\nconsole.log(cache.get(1));',
    },
  },
  {
    id: 'valid-parentheses',
    title: 'Valid Parentheses',
    difficulty: 'Easy',
    languageIds: ['python3', 'javascript', 'java', 'cpp'],
    category: 'Stack',
    description: 'Given a string s containing just the characters (, ), {, }, [ and ], determine if the input string is valid.',
    constraints: ['1 <= s.length <= 10^4', 's consists of parentheses only ()[]{}'],
    examples: [
      { input: 's = "()"', output: 'true' },
      { input: 's = "()[]{}"', output: 'true' },
      { input: 's = "(]"', output: 'false' },
    ],
    hint: 'Use a stack. Push opening brackets, pop and verify for closing brackets.',
    starterCode: {
      python3: 'def isValid(s):\n    # Your solution here\n    pass\n\nprint(isValid("()[]{}"))  # True\nprint(isValid("(]"))      # False',
      javascript: 'function isValid(s) {\n    // Your solution here\n}\n\nconsole.log(isValid("()[]{}"));\nconsole.log(isValid("(]"));',
    },
  },
  {
    id: 'max-subarray',
    title: "Kadane's Algorithm - Max Subarray Sum",
    difficulty: 'Medium',
    languageIds: ['python3', 'javascript', 'java', 'cpp', 'go'],
    category: 'Dynamic Programming',
    description: 'Given an integer array nums, find the subarray with the largest sum and return its sum.',
    constraints: ['1 <= nums.length <= 10^5', '-10^4 <= nums[i] <= 10^4'],
    examples: [
      { input: 'nums = [-2,1,-3,4,-1,2,1,-5,4]', output: '6', explanation: 'Subarray [4,-1,2,1] has the largest sum = 6' },
    ],
    hint: "Use Kadane's algorithm: track current sum and global max as you traverse.",
    starterCode: {
      python3: 'def maxSubArray(nums):\n    # Your solution here\n    pass\n\nprint(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]))',
      javascript: 'function maxSubArray(nums) {\n    // Your solution here\n}\n\nconsole.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]));',
    },
  },
];

export const getProblemById = (id: string): Problem | undefined =>
  PROBLEMS.find((p) => p.id === id);

export const getProblemsByDifficulty = (difficulty: string): Problem[] =>
  difficulty === 'All' ? PROBLEMS : PROBLEMS.filter((p) => p.difficulty === difficulty);

export const getProblemsByLanguage = (languageId: string): Problem[] =>
  PROBLEMS.filter((p) => p.languageIds.includes(languageId));
