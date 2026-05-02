# Notification System Design

## Approach
- Notifications are processed and sorted based on priority.
- Priority order:
  Placement > Result > Event
- Within same priority, sorted by latest timestamp.

## Implementation
- Used Node.js and Express
- Logging middleware added to log every request
- Sorting done using JavaScript array sort

## Optimization
- Only top 10 notifications returned using slice()
- Efficient sorting ensures correct priority display

## Note
The given API required authorization headers which were not available.
Hence, mock data was used to demonstrate the functionality.