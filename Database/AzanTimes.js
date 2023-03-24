// import moment from "moment";
import moment from 'moment-timezone';

import { IQAMA_TIMES_YEAR } from "./IqamaArray";
var hmoment = require("moment-hijri");

const AZAN_TIMES_YEAR = [
  ["6:19 AM", "7:35 AM", "12:26 PM", "2:57 PM", "5:15 PM", "6:33 PM"],
  ["6:19 AM", "7:35 AM", "12:26 PM", "2:58 PM", "5:16 PM", "6:34 PM"],
  ["6:19 AM", "7:36 AM", "12:27 PM", "2:59 PM", "5:17 PM", "6:34 PM"],
  ["6:19 AM", "7:36 AM", "12:27 PM", "2:59 PM", "5:17 PM", "6:34 PM"],
  ["6:19 AM", "7:36 AM", "12:27 PM", "3:00 PM", "5:18 PM", "6:35 PM"],
  ["6:19 AM", "7:36 AM", "12:28 PM", "3:01 PM", "5:20 PM", "6:37 PM"],
  ["6:19 AM", "7:36 AM", "12:28 PM", "3:02 PM", "5:21 PM", "6:38 PM"],
  ["6:19 AM", "7:36 AM", "12:29 PM", "3:03 PM", "5:21 PM", "6:38 PM"],
  ["6:19 AM", "7:36 AM", "12:29 PM", "3:04 PM", "5:22 PM", "6:39 PM"],
  ["6:19 AM", "7:35 AM", "12:30 PM", "3:05 PM", "5:23 PM", "6:40 PM"],
  ["6:19 AM", "7:35 AM", "12:30 PM", "3:06 PM", "5:24 PM", "6:41 PM"],
  ["6:19 AM", "7:35 AM", "12:30 PM", "3:06 PM", "5:24 PM", "6:41 PM"],
  ["6:19 AM", "7:35 AM", "12:31 PM", "3:07 PM", "5:26 PM", "6:43 PM"],
  ["6:19 AM", "7:35 AM", "12:31 PM", "3:08 PM", "5:27 PM", "6:44 PM"],
  ["6:19 AM", "7:34 AM", "12:32 PM", "3:09 PM", "5:28 PM", "6:45 PM"],
  ["6:19 AM", "7:34 AM", "12:32 PM", "3:10 PM", "5:29 PM", "6:45 PM"],
  ["6:18 AM", "7:34 AM", "12:32 PM", "3:11 PM", "5:30 PM", "6:46 PM"],
  ["6:18 AM", "7:33 AM", "12:33 PM", "3:12 PM", "5:31 PM", "6:47 PM"],
  ["6:18 AM", "7:33 AM", "12:33 PM", "3:12 PM", "5:31 PM", "6:47 PM"],
  ["6:17 AM", "7:32 AM", "12:33 PM", "3:14 PM", "5:33 PM", "6:49 PM"],
  ["6:17 AM", "7:32 AM", "12:34 PM", "3:15 PM", "5:35 PM", "6:50 PM"],
  ["6:17 AM", "7:31 AM", "12:34 PM", "3:16 PM", "5:36 PM", "6:51 PM"],
  ["6:16 AM", "7:31 AM", "12:34 PM", "3:17 PM", "5:37 PM", "6:52 PM"],
  ["6:16 AM", "7:30 AM", "12:34 PM", "3:18 PM", "5:38 PM", "6:53 PM"],
  ["6:15 AM", "7:30 AM", "12:35 PM", "3:19 PM", "5:39 PM", "6:54 PM"],
  ["6:15 AM", "7:30 AM", "12:35 PM", "3:19 PM", "5:39 PM", "6:54 PM"],
  ["6:15 AM", "7:29 AM", "12:35 PM", "3:20 PM", "5:40 PM", "6:55 PM"],
  ["6:14 AM", "7:28 AM", "12:35 PM", "3:21 PM", "5:42 PM", "6:57 PM"],
  ["6:13 AM", "7:27 AM", "12:35 PM", "3:22 PM", "5:43 PM", "6:58 PM"],
  ["6:12 AM", "7:26 AM", "12:36 PM", "3:23 PM", "5:44 PM", "6:59 PM"],
  ["6:12 AM", "7:25 AM", "12:36 PM", "3:24 PM", "5:45 PM", "7:00 PM"],
  ["6:11 AM", "7:24 AM", "12:36 PM", "3:25 PM", "5:47 PM", "7:01 PM"],
  ["6:10 AM", "7:24 AM", "12:36 PM", "3:26 PM", "5:48 PM", "7:02 PM"],
  ["6:10 AM", "7:24 AM", "12:36 PM", "3:26 PM", "5:48 PM", "7:02 PM"],
  ["6:09 AM", "7:22 AM", "12:36 PM", "3:28 PM", "5:50 PM", "7:04 PM"],
  ["6:08 AM", "7:21 AM", "12:36 PM", "3:29 PM", "5:51 PM", "7:05 PM"],
  ["6:07 AM", "7:20 AM", "12:36 PM", "3:30 PM", "5:52 PM", "7:06 PM"],
  ["6:06 AM", "7:19 AM", "12:36 PM", "3:31 PM", "5:53 PM", "7:07 PM"],
  ["6:05 AM", "7:18 AM", "12:36 PM", "3:31 PM", "5:54 PM", "7:08 PM"],
  ["6:04 AM", "7:17 AM", "12:36 PM", "3:32 PM", "5:55 PM", "7:09 PM"],
  ["6:04 AM", "7:17 AM", "12:36 PM", "3:32 PM", "5:55 PM", "7:09 PM"],
  ["6:03 AM", "7:16 AM", "12:36 PM", "3:33 PM", "5:56 PM", "7:09 PM"],
  ["6:01 AM", "7:14 AM", "12:36 PM", "3:35 PM", "5:59 PM", "7:11 PM"],
  ["6:00 AM", "7:13 AM", "12:36 PM", "3:36 PM", "6:00 PM", "7:12 PM"],
  ["5:59 AM", "7:12 AM", "12:36 PM", "3:36 PM", "6:01 PM", "7:13 PM"],
  ["5:58 AM", "7:11 AM", "12:36 PM", "3:37 PM", "6:02 PM", "7:14 PM"],
  ["5:57 AM", "7:09 AM", "12:36 PM", "3:38 PM", "6:03 PM", "7:15 PM"],
  ["5:57 AM", "7:09 AM", "12:36 PM", "3:38 PM", "6:03 PM", "7:15 PM"],
  ["5:56 AM", "7:08 AM", "12:36 PM", "3:39 PM", "6:04 PM", "7:16 PM"],
  ["5:54 AM", "7:06 AM", "12:36 PM", "3:40 PM", "6:06 PM", "7:18 PM"],
  ["5:53 AM", "7:05 AM", "12:36 PM", "3:41 PM", "6:07 PM", "7:19 PM"],
  ["5:52 AM", "7:03 AM", "12:36 PM", "3:42 PM", "6:08 PM", "7:20 PM"],
  ["5:50 AM", "7:02 AM", "12:36 PM", "3:42 PM", "6:09 PM", "7:21 PM"],
  ["5:49 AM", "7:01 AM", "12:36 PM", "3:43 PM", "6:10 PM", "7:22 PM"],
  ["5:48 AM", "6:59 AM", "12:35 PM", "3:44 PM", "6:11 PM", "7:23 PM"],
  ["5:48 AM", "6:59 AM", "12:35 PM", "3:44 PM", "6:11 PM", "7:23 PM"],
  ["5:45 AM", "6:57 AM", "12:35 PM", "3:45 PM", "6:13 PM", "7:25 PM"],
  ["5:44 AM", "6:55 AM", "12:35 PM", "3:46 PM", "6:14 PM", "7:26 PM"],
  ["5:43 AM", "6:54 AM", "12:35 PM", "3:46 PM", "6:15 PM", "7:27 PM"],
  ["5:43 AM", "6:54 AM", "12:35 PM", "3:46 PM", "6:15 PM", "7:27 PM"],
  ["5:41 AM", "6:53 AM", "12:35 PM", "3:47 PM", "6:16 PM", "7:28 PM"],
  ["5:40 AM", "6:51 AM", "12:34 PM", "3:48 PM", "6:17 PM", "7:29 PM"],
  ["5:39 AM", "6:50 AM", "12:34 PM", "3:48 PM", "6:18 PM", "7:30 PM"],
  ["5:39 AM", "6:50 AM", "12:34 PM", "3:48 PM", "6:18 PM", "7:30 PM"],
  ["5:37 AM", "6:49 AM", "12:34 PM", "3:49 PM", "6:19 PM", "7:31 PM"],
  ["5:35 AM", "6:46 AM", "12:34 PM", "3:50 PM", "6:21 PM", "7:32 PM"],
  ["5:33 AM", "6:44 AM", "12:33 PM", "3:50 PM", "6:22 PM", "7:33 PM"],
  ["6:32 AM", "7:43 AM", "1:33 PM", "4:51 PM", "7:23 PM", "8:34 PM"],
  ["6:30 AM", "7:42 AM", "1:33 PM", "4:52 PM", "7:24 PM", "8:35 PM"],
  ["6:29 AM", "7:40 AM", "1:33 PM", "4:52 PM", "7:25 PM", "8:36 PM"],
  ["6:27 AM", "7:39 AM", "1:32 PM", "4:52 PM", "7:26 PM", "8:37 PM"],
  ["6:26 AM", "7:37 AM", "1:32 PM", "4:53 PM", "7:26 PM", "8:38 PM"],
  ["6:24 AM", "7:36 AM", "1:32 PM", "4:53 PM", "7:27 PM", "8:39 PM"],
  ["6:23 AM", "7:34 AM", "1:31 PM", "4:54 PM", "7:28 PM", "8:40 PM"],
  ["6:21 AM", "7:33 AM", "1:31 PM", "4:54 PM", "7:29 PM", "8:41 PM"],
  ["6:20 AM", "7:31 AM", "1:31 PM", "4:55 PM", "7:30 PM", "8:42 PM"],
  ["6:18 AM", "7:30 AM", "1:31 PM", "4:55 PM", "7:31 PM", "8:43 PM"],
  ["6:17 AM", "7:28 AM", "1:30 PM", "4:56 PM", "7:32 PM", "8:44 PM"],
  ["6:15 AM", "7:27 AM", "1:30 PM", "4:56 PM", "7:33 PM", "8:45 PM"],
  ["6:14 AM", "7:25 AM", "1:30 PM", "4:56 PM", "7:34 PM", "8:46 PM"],
  ["6:12 AM", "7:24 AM", "1:29 PM", "4:57 PM", "7:35 PM", "8:47 PM"],
  ["6:10 AM", "7:22 AM", "1:29 PM", "4:57 PM", "7:36 PM", "8:48 PM"],
  ["6:09 AM", "7:21 AM", "1:29 PM", "4:58 PM", "7:37 PM", "8:49 PM"],
  ["6:07 AM", "7:19 AM", "1:29 PM", "4:58 PM", "7:37 PM", "8:50 PM"],
  ["6:06 AM", "7:18 AM", "1:28 PM", "4:58 PM", "7:38 PM", "8:51 PM"],
  ["6:04 AM", "7:16 AM", "1:28 PM", "4:59 PM", "7:39 PM", "8:52 PM"],
  ["6:02 AM", "7:15 AM", "1:28 PM", "4:59 PM", "7:40 PM", "8:53 PM"],
  ["6:01 AM", "7:13 AM", "1:27 PM", "4:59 PM", "7:41 PM", "8:54 PM"],
  ["5:59 AM", "7:12 AM", "1:27 PM", "5:00 PM", "7:42 PM", "8:55 PM"],
  ["5:58 AM", "7:10 AM", "1:27 PM", "5:00 PM", "7:43 PM", "8:56 PM"],
  ["5:56 AM", "7:09 AM", "1:26 PM", "5:00 PM", "7:44 PM", "8:57 PM"],
  ["5:54 AM", "7:07 AM", "1:26 PM", "5:00 PM", "7:45 PM", "8:58 PM"],
  ["5:53 AM", "7:06 AM", "1:26 PM", "5:01 PM", "7:45 PM", "8:59 PM"],
  ["5:51 AM", "7:04 AM", "1:26 PM", "5:01 PM", "7:46 PM", "9:00 PM"],
  ["5:50 AM", "7:03 AM", "1:25 PM", "5:01 PM", "7:47 PM", "9:01 PM"],
  ["5:48 AM", "7:01 AM", "1:25 PM", "5:01 PM", "7:48 PM", "9:02 PM"],
  ["5:46 AM", "7:00 AM", "1:25 PM", "5:02 PM", "7:49 PM", "9:03 PM"],
  ["5:45 AM", "6:59 AM", "1:24 PM", "5:02 PM", "7:50 PM", "9:04 PM"],
  ["5:43 AM", "6:57 AM", "1:24 PM", "5:02 PM", "7:51 PM", "9:05 PM"],
  ["5:41 AM", "6:56 AM", "1:24 PM", "5:02 PM", "7:52 PM", "9:06 PM"],
  ["5:40 AM", "6:54 AM", "1:24 PM", "5:03 PM", "7:53 PM", "9:07 PM"],
  ["5:38 AM", "6:53 AM", "1:23 PM", "5:03 PM", "7:53 PM", "9:08 PM"],
  ["5:37 AM", "6:51 AM", "1:23 PM", "5:03 PM", "7:54 PM", "9:10 PM"],
  ["5:35 AM", "6:50 AM", "1:23 PM", "5:03 PM", "7:55 PM", "9:11 PM"],
  ["5:33 AM", "6:49 AM", "1:23 PM", "5:03 PM", "7:56 PM", "9:12 PM"],
  ["5:32 AM", "6:47 AM", "1:22 PM", "5:04 PM", "7:57 PM", "9:13 PM"],
  ["5:30 AM", "6:46 AM", "1:22 PM", "5:04 PM", "7:58 PM", "9:14 PM"],
  ["5:29 AM", "6:44 AM", "1:22 PM", "5:04 PM", "7:59 PM", "9:15 PM"],
  ["5:27 AM", "6:43 AM", "1:22 PM", "5:04 PM", "8:00 PM", "9:16 PM"],
  ["5:25 AM", "6:42 AM", "1:21 PM", "5:04 PM", "8:01 PM", "9:17 PM"],
  ["5:24 AM", "6:40 AM", "1:21 PM", "5:05 PM", "8:02 PM", "9:18 PM"],
  ["5:22 AM", "6:39 AM", "1:21 PM", "5:05 PM", "8:02 PM", "9:20 PM"],
  ["5:21 AM", "6:38 AM", "1:21 PM", "5:05 PM", "8:03 PM", "9:21 PM"],
  ["5:19 AM", "6:37 AM", "1:21 PM", "5:05 PM", "8:04 PM", "9:22 PM"],
  ["5:18 AM", "6:35 AM", "1:20 PM", "5:05 PM", "8:05 PM", "9:23 PM"],
  ["5:16 AM", "6:34 AM", "1:20 PM", "5:05 PM", "8:06 PM", "9:24 PM"],
  ["5:15 AM", "6:33 AM", "1:20 PM", "5:06 PM", "8:07 PM", "9:25 PM"],
  ["5:13 AM", "6:32 AM", "1:20 PM", "5:06 PM", "8:08 PM", "9:27 PM"],
  ["5:12 AM", "6:30 AM", "1:20 PM", "5:06 PM", "8:09 PM", "9:28 PM"],
  ["5:10 AM", "6:29 AM", "1:20 PM", "5:06 PM", "8:10 PM", "9:29 PM"],
  ["5:09 AM", "6:28 AM", "1:19 PM", "5:06 PM", "8:11 PM", "9:30 PM"],
  ["5:07 AM", "6:27 AM", "1:19 PM", "5:06 PM", "8:11 PM", "9:31 PM"],
  ["5:06 AM", "6:26 AM", "1:19 PM", "5:07 PM", "8:12 PM", "9:32 PM"],
  ["5:05 AM", "6:25 AM", "1:19 PM", "5:07 PM", "8:13 PM", "9:34 PM"],
  ["5:03 AM", "6:23 AM", "1:19 PM", "5:07 PM", "8:14 PM", "9:35 PM"],
  ["5:02 AM", "6:22 AM", "1:19 PM", "5:07 PM", "8:15 PM", "9:36 PM"],
  ["5:01 AM", "6:21 AM", "1:19 PM", "5:07 PM", "8:16 PM", "9:37 PM"],
  ["4:59 AM", "6:20 AM", "1:19 PM", "5:07 PM", "8:17 PM", "9:38 PM"],
  ["4:58 AM", "6:19 AM", "1:19 PM", "5:08 PM", "8:18 PM", "9:40 PM"],
  ["4:57 AM", "6:18 AM", "1:19 PM", "5:08 PM", "8:19 PM", "9:41 PM"],
  ["4:55 AM", "6:17 AM", "1:19 PM", "5:08 PM", "8:19 PM", "9:42 PM"],
  ["4:54 AM", "6:16 AM", "1:19 PM", "5:08 PM", "8:20 PM", "9:43 PM"],
  ["4:53 AM", "6:15 AM", "1:19 PM", "5:08 PM", "8:21 PM", "9:44 PM"],
  ["4:52 AM", "6:15 AM", "1:19 PM", "5:08 PM", "8:22 PM", "9:45 PM"],
  ["4:51 AM", "6:14 AM", "1:19 PM", "5:09 PM", "8:23 PM", "9:47 PM"],
  ["4:49 AM", "6:13 AM", "1:19 PM", "5:09 PM", "8:24 PM", "9:48 PM"],
  ["4:48 AM", "6:12 AM", "1:19 PM", "5:09 PM", "8:25 PM", "9:49 PM"],
  ["4:47 AM", "6:11 AM", "1:19 PM", "5:09 PM", "8:25 PM", "9:50 PM"],
  ["4:46 AM", "6:10 AM", "1:19 PM", "5:09 PM", "8:26 PM", "9:51 PM"],
  ["4:45 AM", "6:10 AM", "1:19 PM", "5:09 PM", "8:27 PM", "9:52 PM"],
  ["4:44 AM", "6:09 AM", "1:19 PM", "5:10 PM", "8:28 PM", "9:53 PM"],
  ["4:43 AM", "6:08 AM", "1:19 PM", "5:10 PM", "8:29 PM", "9:54 PM"],
  ["4:42 AM", "6:08 AM", "1:19 PM", "5:10 PM", "8:30 PM", "9:56 PM"],
  ["4:41 AM", "6:07 AM", "1:19 PM", "5:10 PM", "8:30 PM", "9:57 PM"],
  ["4:40 AM", "6:06 AM", "1:19 PM", "5:10 PM", "8:31 PM", "9:58 PM"],
  ["4:40 AM", "6:06 AM", "1:19 PM", "5:11 PM", "8:32 PM", "9:59 PM"],
  ["4:39 AM", "6:05 AM", "1:19 PM", "5:11 PM", "8:33 PM", "10:00 PM"],
  ["4:38 AM", "6:05 AM", "1:19 PM", "5:11 PM", "8:33 PM", "10:01 PM"],
  ["4:37 AM", "6:04 AM", "1:19 PM", "5:11 PM", "8:34 PM", "10:02 PM"],
  ["4:37 AM", "6:04 AM", "1:20 PM", "5:11 PM", "8:35 PM", "10:03 PM"],
  ["4:36 AM", "6:03 AM", "1:20 PM", "5:12 PM", "8:36 PM", "10:04 PM"],
  ["4:35 AM", "6:03 AM", "1:20 PM", "5:12 PM", "8:36 PM", "10:04 PM"],
  ["4:35 AM", "6:03 AM", "1:20 PM", "5:12 PM", "8:37 PM", "10:05 PM"],
  ["4:34 AM", "6:02 AM", "1:20 PM", "5:12 PM", "8:37 PM", "10:06 PM"],
  ["4:34 AM", "6:02 AM", "1:20 PM", "5:13 PM", "8:38 PM", "10:07 PM"],
  ["4:33 AM", "6:02 AM", "1:21 PM", "5:13 PM", "8:39 PM", "10:08 PM"],
  ["4:33 AM", "6:01 AM", "1:21 PM", "5:13 PM", "8:39 PM", "10:09 PM"],
  ["4:32 AM", "6:01 AM", "1:21 PM", "5:13 PM", "8:40 PM", "10:09 PM"],
  ["4:32 AM", "6:01 AM", "1:21 PM", "5:13 PM", "8:40 PM", "10:10 PM"],
  ["4:32 AM", "6:01 AM", "1:21 PM", "5:14 PM", "8:41 PM", "10:11 PM"],
  ["4:31 AM", "6:01 AM", "1:21 PM", "5:14 PM", "8:42 PM", "10:11 PM"],
  ["4:31 AM", "6:00 AM", "1:22 PM", "5:14 PM", "8:42 PM", "10:12 PM"],
  ["4:31 AM", "6:00 AM", "1:22 PM", "5:14 PM", "8:43 PM", "10:13 PM"],
  ["4:31 AM", "6:00 AM", "1:22 PM", "5:15 PM", "8:43 PM", "10:13 PM"],
  ["4:31 AM", "6:00 AM", "1:22 PM", "5:15 PM", "8:43 PM", "10:14 PM"],
  ["4:31 AM", "6:00 AM", "1:22 PM", "5:15 PM", "8:44 PM", "10:14 PM"],
  ["4:31 AM", "6:00 AM", "1:23 PM", "5:15 PM", "8:44 PM", "10:15 PM"],
  ["4:31 AM", "6:00 AM", "1:23 PM", "5:16 PM", "8:45 PM", "10:15 PM"],
  ["4:31 AM", "6:00 AM", "1:23 PM", "5:16 PM", "8:45 PM", "10:16 PM"],
  ["4:31 AM", "6:01 AM", "1:23 PM", "5:16 PM", "8:45 PM", "10:16 PM"],
  ["4:31 AM", "6:01 AM", "1:24 PM", "5:16 PM", "8:45 PM", "10:16 PM"],
  ["4:31 AM", "6:01 AM", "1:24 PM", "5:16 PM", "8:46 PM", "10:16 PM"],
  ["4:31 AM", "6:01 AM", "1:24 PM", "5:17 PM", "8:46 PM", "10:17 PM"],
  ["4:32 AM", "6:01 AM", "1:24 PM", "5:17 PM", "8:46 PM", "10:17 PM"],
  ["4:32 AM", "6:02 AM", "1:24 PM", "5:17 PM", "8:46 PM", "10:17 PM"],
  ["4:32 AM", "6:02 AM", "1:25 PM", "5:17 PM", "8:46 PM", "10:17 PM"],
  ["4:33 AM", "6:02 AM", "1:25 PM", "5:18 PM", "8:47 PM", "10:17 PM"],
  ["4:33 AM", "6:02 AM", "1:25 PM", "5:18 PM", "8:47 PM", "10:17 PM"],
  ["4:33 AM", "6:03 AM", "1:25 PM", "5:18 PM", "8:47 PM", "10:17 PM"],
  ["4:34 AM", "6:03 AM", "1:25 PM", "5:18 PM", "8:47 PM", "10:17 PM"],
  ["4:34 AM", "6:04 AM", "1:26 PM", "5:18 PM", "8:47 PM", "10:17 PM"],
  ["4:35 AM", "6:04 AM", "1:26 PM", "5:18 PM", "8:47 PM", "10:17 PM"],
  ["4:36 AM", "6:04 AM", "1:26 PM", "5:19 PM", "8:47 PM", "10:17 PM"],
  ["4:36 AM", "6:05 AM", "1:26 PM", "5:19 PM", "8:46 PM", "10:16 PM"],
  ["4:37 AM", "6:05 AM", "1:26 PM", "5:19 PM", "8:46 PM", "10:16 PM"],
  ["4:37 AM", "6:06 AM", "1:27 PM", "5:19 PM", "8:46 PM", "10:16 PM"],
  ["4:38 AM", "6:06 AM", "1:27 PM", "5:19 PM", "8:46 PM", "10:15 PM"],
  ["4:39 AM", "6:07 AM", "1:27 PM", "5:19 PM", "8:46 PM", "10:15 PM"],
  ["4:40 AM", "6:07 AM", "1:27 PM", "5:19 PM", "8:46 PM", "10:15 PM"],
  ["4:40 AM", "6:08 AM", "1:27 PM", "5:19 PM", "8:45 PM", "10:14 PM"],
  ["4:41 AM", "6:09 AM", "1:27 PM", "5:20 PM", "8:45 PM", "10:14 PM"],
  ["4:42 AM", "6:09 AM", "1:28 PM", "5:20 PM", "8:45 PM", "10:13 PM"],
  ["4:43 AM", "6:10 AM", "1:28 PM", "5:20 PM", "8:44 PM", "10:12 PM"],
  ["4:44 AM", "6:11 AM", "1:28 PM", "5:20 PM", "8:44 PM", "10:12 PM"],
  ["4:45 AM", "6:11 AM", "1:28 PM", "5:20 PM", "8:43 PM", "10:11 PM"],
  ["4:46 AM", "6:12 AM", "1:28 PM", "5:20 PM", "8:43 PM", "10:10 PM"],
  ["4:47 AM", "6:13 AM", "1:28 PM", "5:20 PM", "8:43 PM", "10:10 PM"],
  ["4:48 AM", "6:13 AM", "1:28 PM", "5:20 PM", "8:42 PM", "10:09 PM"],
  ["4:49 AM", "6:14 AM", "1:28 PM", "5:20 PM", "8:41 PM", "10:08 PM"],
  ["4:50 AM", "6:15 AM", "1:28 PM", "5:20 PM", "8:41 PM", "10:07 PM"],
  ["4:51 AM", "6:15 AM", "1:29 PM", "5:20 PM", "8:40 PM", "10:06 PM"],
  ["4:52 AM", "6:16 AM", "1:29 PM", "5:20 PM", "8:40 PM", "10:06 PM"],
  ["4:53 AM", "6:17 AM", "1:29 PM", "5:20 PM", "8:39 PM", "10:05 PM"],
  ["4:54 AM", "6:18 AM", "1:29 PM", "5:20 PM", "8:38 PM", "10:04 PM"],
  ["4:55 AM", "6:18 AM", "1:29 PM", "5:20 PM", "8:38 PM", "10:03 PM"],
  ["4:56 AM", "6:19 AM", "1:29 PM", "5:19 PM", "8:37 PM", "10:02 PM"],
  ["4:57 AM", "6:20 AM", "1:29 PM", "5:19 PM", "8:36 PM", "10:00 PM"],
  ["4:58 AM", "6:21 AM", "1:29 PM", "5:19 PM", "8:35 PM", "9:59 PM"],
  ["4:59 AM", "6:22 AM", "1:29 PM", "5:19 PM", "8:34 PM", "9:58 PM"],
  ["5:00 AM", "6:22 AM", "1:29 PM", "5:19 PM", "8:34 PM", "9:57 PM"],
  ["5:01 AM", "6:23 AM", "1:29 PM", "5:19 PM", "8:33 PM", "9:56 PM"],
  ["5:03 AM", "6:24 AM", "1:29 PM", "5:18 PM", "8:32 PM", "9:55 PM"],
  ["5:04 AM", "6:25 AM", "1:29 PM", "5:18 PM", "8:31 PM", "9:54 PM"],
  ["5:05 AM", "6:26 AM", "1:29 PM", "5:18 PM", "8:30 PM", "9:52 PM"],
  ["5:06 AM", "6:26 AM", "1:28 PM", "5:18 PM", "8:29 PM", "9:51 PM"],
  ["5:07 AM", "6:27 AM", "1:28 PM", "5:17 PM", "8:28 PM", "9:50 PM"],
  ["5:08 AM", "6:28 AM", "1:28 PM", "5:17 PM", "8:27 PM", "9:48 PM"],
  ["5:09 AM", "6:29 AM", "1:28 PM", "5:17 PM", "8:26 PM", "9:47 PM"],
  ["5:10 AM", "6:30 AM", "1:28 PM", "5:16 PM", "8:25 PM", "9:46 PM"],
  ["5:12 AM", "6:31 AM", "1:28 PM", "5:16 PM", "8:24 PM", "9:44 PM"],
  ["5:13 AM", "6:31 AM", "1:28 PM", "5:16 PM", "8:23 PM", "9:43 PM"],
  ["5:14 AM", "6:32 AM", "1:28 PM", "5:15 PM", "8:22 PM", "9:42 PM"],
  ["5:15 AM", "6:33 AM", "1:28 PM", "5:15 PM", "8:21 PM", "9:40 PM"],
  ["5:16 AM", "6:34 AM", "1:27 PM", "5:14 PM", "8:19 PM", "9:39 PM"],
  ["5:17 AM", "6:35 AM", "1:27 PM", "5:14 PM", "8:18 PM", "9:37 PM"],
  ["5:18 AM", "6:36 AM", "1:27 PM", "5:13 PM", "8:17 PM", "9:36 PM"],
  ["5:20 AM", "6:37 AM", "1:27 PM", "5:13 PM", "8:16 PM", "9:34 PM"],
  ["5:21 AM", "6:37 AM", "1:27 PM", "5:12 PM", "8:15 PM", "9:33 PM"],
  ["5:22 AM", "6:38 AM", "1:27 PM", "5:12 PM", "8:13 PM", "9:31 PM"],
  ["5:23 AM", "6:39 AM", "1:26 PM", "5:11 PM", "8:12 PM", "9:30 PM"],
  ["5:24 AM", "6:40 AM", "1:26 PM", "5:11 PM", "8:11 PM", "9:28 PM"],
  ["5:25 AM", "6:41 AM", "1:26 PM", "5:10 PM", "8:09 PM", "9:27 PM"],
  ["5:26 AM", "6:42 AM", "1:26 PM", "5:10 PM", "8:08 PM", "9:25 PM"],
  ["5:27 AM", "6:42 AM", "1:25 PM", "5:09 PM", "8:07 PM", "9:24 PM"],
  ["5:28 AM", "6:43 AM", "1:25 PM", "5:08 PM", "8:05 PM", "9:22 PM"],
  ["5:29 AM", "6:44 AM", "1:25 PM", "5:08 PM", "8:04 PM", "9:20 PM"],
  ["5:30 AM", "6:45 AM", "1:25 PM", "5:07 PM", "8:03 PM", "9:19 PM"],
  ["5:32 AM", "6:46 AM", "1:24 PM", "5:06 PM", "8:01 PM", "9:17 PM"],
  ["5:33 AM", "6:47 AM", "1:24 PM", "5:06 PM", "8:00 PM", "9:16 PM"],
  ["5:34 AM", "6:47 AM", "1:24 PM", "5:05 PM", "7:59 PM", "9:14 PM"],
  ["5:35 AM", "6:48 AM", "1:23 PM", "5:04 PM", "7:57 PM", "9:12 PM"],
  ["5:36 AM", "6:49 AM", "1:23 PM", "5:04 PM", "7:56 PM", "9:11 PM"],
  ["5:37 AM", "6:50 AM", "1:23 PM", "5:03 PM", "7:54 PM", "9:09 PM"],
  ["5:38 AM", "6:51 AM", "1:23 PM", "5:02 PM", "7:53 PM", "9:07 PM"],
  ["5:39 AM", "6:52 AM", "1:22 PM", "5:01 PM", "7:51 PM", "9:06 PM"],
  ["5:40 AM", "6:52 AM", "1:22 PM", "5:00 PM", "7:50 PM", "9:04 PM"],
  ["5:41 AM", "6:53 AM", "1:22 PM", "5:00 PM", "7:48 PM", "9:02 PM"],
  ["5:42 AM", "6:54 AM", "1:21 PM", "4:59 PM", "7:47 PM", "9:01 PM"],
  ["5:43 AM", "6:55 AM", "1:21 PM", "4:58 PM", "7:45 PM", "8:59 PM"],
  ["5:44 AM", "6:56 AM", "1:21 PM", "4:57 PM", "7:44 PM", "8:57 PM"],
  ["5:45 AM", "6:56 AM", "1:20 PM", "4:56 PM", "7:43 PM", "8:56 PM"],
  ["5:46 AM", "6:57 AM", "1:20 PM", "4:55 PM", "7:41 PM", "8:54 PM"],
  ["5:47 AM", "6:58 AM", "1:20 PM", "4:54 PM", "7:39 PM", "8:52 PM"],
  ["5:48 AM", "6:59 AM", "1:19 PM", "4:53 PM", "7:38 PM", "8:51 PM"],
  ["5:49 AM", "7:00 AM", "1:19 PM", "4:53 PM", "7:36 PM", "8:49 PM"],
  ["5:50 AM", "7:01 AM", "1:19 PM", "4:52 PM", "7:35 PM", "8:48 PM"],
  ["5:51 AM", "7:01 AM", "1:18 PM", "4:51 PM", "7:33 PM", "8:46 PM"],
  ["5:51 AM", "7:02 AM", "1:18 PM", "4:50 PM", "7:32 PM", "8:44 PM"],
  ["5:52 AM", "7:03 AM", "1:17 PM", "4:49 PM", "7:30 PM", "8:43 PM"],
  ["5:53 AM", "7:04 AM", "1:17 PM", "4:48 PM", "7:29 PM", "8:41 PM"],
  ["5:54 AM", "7:05 AM", "1:17 PM", "4:47 PM", "7:27 PM", "8:39 PM"],
  ["5:55 AM", "7:05 AM", "1:16 PM", "4:46 PM", "7:26 PM", "8:38 PM"],
  ["5:56 AM", "7:06 AM", "1:16 PM", "4:45 PM", "7:24 PM", "8:36 PM"],
  ["5:57 AM", "7:07 AM", "1:16 PM", "4:44 PM", "7:23 PM", "8:34 PM"],
  ["5:58 AM", "7:08 AM", "1:15 PM", "4:43 PM", "7:21 PM", "8:33 PM"],
  ["5:59 AM", "7:09 AM", "1:15 PM", "4:42 PM", "7:20 PM", "8:31 PM"],
  ["6:00 AM", "7:10 AM", "1:15 PM", "4:41 PM", "7:18 PM", "8:30 PM"],
  ["6:01 AM", "7:10 AM", "1:14 PM", "4:40 PM", "7:17 PM", "8:28 PM"],
  ["6:01 AM", "7:11 AM", "1:14 PM", "4:39 PM", "7:15 PM", "8:26 PM"],
  ["6:02 AM", "7:12 AM", "1:14 PM", "4:38 PM", "7:13 PM", "8:25 PM"],
  ["6:03 AM", "7:13 AM", "1:13 PM", "4:37 PM", "7:12 PM", "8:23 PM"],
  ["6:04 AM", "7:14 AM", "1:13 PM", "4:35 PM", "7:10 PM", "8:22 PM"],
  ["6:05 AM", "7:15 AM", "1:13 PM", "4:34 PM", "7:09 PM", "8:20 PM"],
  ["6:06 AM", "7:16 AM", "1:12 PM", "4:33 PM", "7:07 PM", "8:19 PM"],
  ["6:07 AM", "7:16 AM", "1:12 PM", "4:32 PM", "7:06 PM", "8:17 PM"],
  ["6:08 AM", "7:17 AM", "1:12 PM", "4:31 PM", "7:04 PM", "8:16 PM"],
  ["6:09 AM", "7:18 AM", "1:11 PM", "4:30 PM", "7:03 PM", "8:14 PM"],
  ["6:09 AM", "7:19 AM", "1:11 PM", "4:29 PM", "7:01 PM", "8:13 PM"],
  ["6:10 AM", "7:20 AM", "1:11 PM", "4:28 PM", "7:00 PM", "8:11 PM"],
  ["6:11 AM", "7:21 AM", "1:10 PM", "4:27 PM", "6:58 PM", "8:10 PM"],
  ["6:12 AM", "7:22 AM", "1:10 PM", "4:26 PM", "6:57 PM", "8:08 PM"],
  ["6:13 AM", "7:22 AM", "1:10 PM", "4:25 PM", "6:56 PM", "8:07 PM"],
  ["6:14 AM", "7:23 AM", "1:10 PM", "4:24 PM", "6:54 PM", "8:05 PM"],
  ["6:15 AM", "7:24 AM", "1:09 PM", "4:23 PM", "6:53 PM", "8:04 PM"],
  ["6:16 AM", "7:25 AM", "1:09 PM", "4:22 PM", "6:51 PM", "8:02 PM"],
  ["6:16 AM", "7:26 AM", "1:09 PM", "4:21 PM", "6:50 PM", "8:01 PM"],
  ["6:17 AM", "7:27 AM", "1:08 PM", "4:20 PM", "6:48 PM", "8:00 PM"],
  ["6:18 AM", "7:28 AM", "1:08 PM", "4:19 PM", "6:47 PM", "7:58 PM"],
  ["6:19 AM", "7:29 AM", "1:08 PM", "4:17 PM", "6:46 PM", "7:57 PM"],
  ["6:20 AM", "7:30 AM", "1:08 PM", "4:16 PM", "6:44 PM", "7:56 PM"],
  ["6:21 AM", "7:31 AM", "1:08 PM", "4:15 PM", "6:43 PM", "7:54 PM"],
  ["6:22 AM", "7:32 AM", "1:07 PM", "4:14 PM", "6:42 PM", "7:53 PM"],
  ["6:23 AM", "7:33 AM", "1:07 PM", "4:13 PM", "6:40 PM", "7:52 PM"],
  ["6:23 AM", "7:34 AM", "1:07 PM", "4:12 PM", "6:39 PM", "7:51 PM"],
  ["6:24 AM", "7:35 AM", "1:07 PM", "4:11 PM", "6:38 PM", "7:49 PM"],
  ["6:25 AM", "7:36 AM", "1:07 PM", "4:10 PM", "6:36 PM", "7:48 PM"],
  ["6:26 AM", "7:36 AM", "1:07 PM", "4:09 PM", "6:35 PM", "7:47 PM"],
  ["6:27 AM", "7:37 AM", "1:06 PM", "4:08 PM", "6:34 PM", "7:46 PM"],
  ["6:28 AM", "7:38 AM", "1:06 PM", "4:08 PM", "6:33 PM", "7:45 PM"],
  ["6:29 AM", "7:39 AM", "1:06 PM", "4:07 PM", "6:32 PM", "7:44 PM"],
  ["6:30 AM", "7:40 AM", "1:06 PM", "4:06 PM", "6:30 PM", "7:43 PM"],
  ["6:31 AM", "7:41 AM", "1:06 PM", "4:05 PM", "6:29 PM", "7:42 PM"],
  ["6:31 AM", "7:42 AM", "1:06 PM", "4:04 PM", "6:28 PM", "7:40 PM"],
  ["6:32 AM", "7:43 AM", "1:06 PM", "4:03 PM", "6:27 PM", "7:39 PM"],
  ["6:33 AM", "7:44 AM", "1:06 PM", "4:02 PM", "6:26 PM", "7:38 PM"],
  ["5:34 AM", "6:45 AM", "12:06 PM", "3:01 PM", "5:25 PM", "6:37 PM"],
  ["5:35 AM", "6:46 AM", "12:06 PM", "3:00 PM", "5:24 PM", "6:37 PM"],
  ["5:36 AM", "6:48 AM", "12:06 PM", "3:00 PM", "5:23 PM", "6:36 PM"],
  ["5:37 AM", "6:49 AM", "12:06 PM", "2:59 PM", "5:22 PM", "6:35 PM"],
  ["5:38 AM", "6:50 AM", "12:06 PM", "2:58 PM", "5:21 PM", "6:34 PM"],
  ["5:39 AM", "6:51 AM", "12:06 PM", "2:57 PM", "5:20 PM", "6:33 PM"],
  ["5:40 AM", "6:52 AM", "12:06 PM", "2:57 PM", "5:19 PM", "6:32 PM"],
  ["5:41 AM", "6:53 AM", "12:06 PM", "2:56 PM", "5:18 PM", "6:31 PM"],
  ["5:41 AM", "6:53 AM", "12:06 PM", "2:56 PM", "5:18 PM", "6:31 PM"],
  ["5:41 AM", "6:54 AM", "12:06 PM", "2:55 PM", "5:17 PM", "6:31 PM"],
  ["5:43 AM", "6:56 AM", "12:06 PM", "2:54 PM", "5:15 PM", "6:29 PM"],
  ["5:44 AM", "6:57 AM", "12:06 PM", "2:53 PM", "5:14 PM", "6:29 PM"],
  ["5:45 AM", "6:58 AM", "12:06 PM", "2:53 PM", "5:14 PM", "6:28 PM"],
  ["5:46 AM", "6:59 AM", "12:07 PM", "2:52 PM", "5:13 PM", "6:27 PM"],
  ["5:47 AM", "7:00 AM", "12:07 PM", "2:51 PM", "5:12 PM", "6:27 PM"],
  ["5:48 AM", "7:01 AM", "12:07 PM", "2:51 PM", "5:12 PM", "6:26 PM"],
  ["5:48 AM", "7:01 AM", "12:07 PM", "2:51 PM", "5:12 PM", "6:26 PM"],
  ["5:50 AM", "7:03 AM", "12:07 PM", "2:50 PM", "5:10 PM", "6:25 PM"],
  ["5:51 AM", "7:04 AM", "12:08 PM", "2:49 PM", "5:10 PM", "6:25 PM"],
  ["5:51 AM", "7:05 AM", "12:08 PM", "2:49 PM", "5:09 PM", "6:24 PM"],
  ["5:52 AM", "7:06 AM", "12:08 PM", "2:49 PM", "5:09 PM", "6:24 PM"],
  ["5:53 AM", "7:07 AM", "12:08 PM", "2:48 PM", "5:08 PM", "6:23 PM"],
  ["5:54 AM", "7:08 AM", "12:09 PM", "2:48 PM", "5:08 PM", "6:23 PM"],
  ["5:54 AM", "7:08 AM", "12:09 PM", "2:48 PM", "5:08 PM", "6:23 PM"],
  ["5:56 AM", "7:10 AM", "12:09 PM", "2:47 PM", "5:07 PM", "6:23 PM"],
  ["5:57 AM", "7:11 AM", "12:09 PM", "2:47 PM", "5:06 PM", "6:22 PM"],
  ["5:58 AM", "7:12 AM", "12:10 PM", "2:47 PM", "5:06 PM", "6:22 PM"],
  ["5:58 AM", "7:13 AM", "12:10 PM", "2:47 PM", "5:06 PM", "6:22 PM"],
  ["5:59 AM", "7:14 AM", "12:10 PM", "2:46 PM", "5:05 PM", "6:22 PM"],
  ["6:00 AM", "7:15 AM", "12:11 PM", "2:46 PM", "5:05 PM", "6:22 PM"],
  ["6:00 AM", "7:15 AM", "12:11 PM", "2:46 PM", "5:05 PM", "6:22 PM"],
  ["6:01 AM", "7:16 AM", "12:11 PM", "2:46 PM", "5:05 PM", "6:21 PM"],
  ["6:03 AM", "7:18 AM", "12:12 PM", "2:46 PM", "5:05 PM", "6:21 PM"],
  ["6:03 AM", "7:19 AM", "12:12 PM", "2:46 PM", "5:05 PM", "6:21 PM"],
  ["6:04 AM", "7:20 AM", "12:13 PM", "2:46 PM", "5:05 PM", "6:21 PM"],
  ["6:05 AM", "7:21 AM", "12:13 PM", "2:46 PM", "5:04 PM", "6:21 PM"],
  ["6:06 AM", "7:22 AM", "12:14 PM", "2:46 PM", "5:05 PM", "6:22 PM"],
  ["6:06 AM", "7:22 AM", "12:14 PM", "2:46 PM", "5:05 PM", "6:22 PM"],
  ["6:06 AM", "7:22 AM", "12:14 PM", "2:46 PM", "5:05 PM", "6:22 PM"],
  ["6:08 AM", "7:24 AM", "12:15 PM", "2:47 PM", "5:05 PM", "6:22 PM"],
  ["6:09 AM", "7:25 AM", "12:15 PM", "2:47 PM", "5:05 PM", "6:22 PM"],
  ["6:09 AM", "7:26 AM", "12:16 PM", "2:47 PM", "5:05 PM", "6:23 PM"],
  ["6:10 AM", "7:26 AM", "12:16 PM", "2:47 PM", "5:05 PM", "6:23 PM"],
  ["6:11 AM", "7:27 AM", "12:17 PM", "2:48 PM", "5:06 PM", "6:23 PM"],
  ["6:11 AM", "7:28 AM", "12:17 PM", "2:48 PM", "5:06 PM", "6:23 PM"],
  ["6:11 AM", "7:28 AM", "12:17 PM", "2:48 PM", "5:06 PM", "6:23 PM"],
  ["6:12 AM", "7:28 AM", "12:18 PM", "2:48 PM", "5:06 PM", "6:24 PM"],
  ["6:13 AM", "7:30 AM", "12:19 PM", "2:49 PM", "5:07 PM", "6:25 PM"],
  ["6:14 AM", "7:30 AM", "12:19 PM", "2:49 PM", "5:07 PM", "6:25 PM"],
  ["6:14 AM", "7:31 AM", "12:20 PM", "2:50 PM", "5:08 PM", "6:25 PM"],
  ["6:15 AM", "7:31 AM", "12:20 PM", "2:50 PM", "5:08 PM", "6:26 PM"],
  ["6:15 AM", "7:32 AM", "12:21 PM", "2:51 PM", "5:09 PM", "6:26 PM"],
  ["6:15 AM", "7:32 AM", "12:21 PM", "2:51 PM", "5:09 PM", "6:26 PM"],
  ["6:16 AM", "7:32 AM", "12:21 PM", "2:51 PM", "5:09 PM", "6:27 PM"],
  ["6:16 AM", "7:33 AM", "12:22 PM", "2:53 PM", "5:10 PM", "6:28 PM"],
  ["6:17 AM", "7:34 AM", "12:23 PM", "2:53 PM", "5:11 PM", "6:29 PM"],
  ["6:17 AM", "7:34 AM", "12:23 PM", "2:54 PM", "5:12 PM", "6:29 PM"],
  ["6:17 AM", "7:34 AM", "12:24 PM", "2:54 PM", "5:12 PM", "6:30 PM"],
  ["6:18 AM", "7:35 AM", "12:24 PM", "2:55 PM", "5:13 PM", "6:31 PM"],
  ["6:18 AM", "7:35 AM", "12:25 PM", "2:56 PM", "5:14 PM", "6:31 PM"],
  ["6:18 AM", "7:35 AM", "12:25 PM", "2:56 PM", "5:14 PM", "6:31 PM"],
];
//WHEN DST, we +1 one hour
//THE SECOND WEEK OF MARCH, we need to find the sunday, if not sunday yet then we will minus one the times to counter the effect.
const FEBRUARY = 2;
const MARCH = 3;
const NOVEMBER = 11;

const HijriMonths = [
  "Muharram",
  "Safar",
  "Rabii I",
  "Rabii II",
  "Jumada I",
  "Jumada II",
  "Rajab",
  "Shaaban",
  "Ramadan",
  "Shawwal",
  "Dhu al-Qaadah",
  "Dhu al-Hijjah",
];
const isStandardTime = (selectedDate) => !selectedDate.isDST();

export function getGDate(gdate) {
  return gdate.format("ddd") + ", " + gdate.format("MMM") + " " + gdate.date();
}

export function getHDate(GregDate) {
  const hDate = hmoment(GregDate);
  return (
    HijriMonths[hDate.iMonth()] + " " + hDate.iDate() + ", " + hDate.iYear()
  );
}

const getTimeShift = (selectedDate) => {
  const month = selectedDate.month() + 1;
  if (month != MARCH && month != NOVEMBER) {
    return 0;
  }

  if (month == MARCH) {
    //If it's march
    return selectedDate.date() > 7 && isStandardTime(selectedDate) ? -1 : 0;
  }

  return isStandardTime(selectedDate) ? 0 : 1;
};

//Get Index of SelectedDate from the AZAN_TIMES
const getIndex = (selectedDate =moment.tz('America/New_York')) => {
  const month = selectedDate.month() + 1;
  const day = selectedDate.dayOfYear();
  const isLeapYear = selectedDate.isLeapYear();
  return !isLeapYear && month > FEBRUARY ? day : day - 1;
};

//Get Azan Times of Selected Day, with corrections if DST not started yet
// moment() gets the time of the current place you are in, so we use 'moment-timezone' instead
// const getAzanTimesOneDay = (selectedDate = moment()) => {
  const getAzanTimesOneDay = (selectedDate = moment.tz('America/New_York')) => {
  var AzanTimesOneDay = [];
  const dayOfYear = getIndex(selectedDate);
  const timeShift = getTimeShift(selectedDate); // Handle DST

  //for loop to manually fill the prayer times of the day
  // We loop 6 times not 5 because now we have the sunrise
  for (var prayerIndex = 0; prayerIndex < 6; prayerIndex++) {
    AzanTimesOneDay[prayerIndex] = moment(
      AZAN_TIMES_YEAR[dayOfYear][prayerIndex],
      "h:mma"
    )
      .add(timeShift, "hours")
      .format("h:mm A");
  }
  return AzanTimesOneDay;
};

// The first 5 cells are the azan times, the last cell contains the date of this cell.
function getAzanAllYear() {
  let AzanTimes365 = [];
  for (var i = 0; i < 400; i++) {
    AzanTimes365[i] = getAzanTimesOneDay(new moment.tz('America/New_York').add(i, "days"));
    AzanTimes365[i][6] = new moment.tz('America/New_York').add(i, "days");
  }
  return AzanTimes365;
}
export const AzanTimes365 = getAzanAllYear();

export const getIqamaWeek = (selectedDate = moment.tz('America/New_York')) => {
  const start = moment([2019, 11, 29]); //The first week of Iqama csv file to calculate the diff of weeks from
  const idx = selectedDate.diff(start, "weeks");
  let temp = IQAMA_TIMES_YEAR[idx];
  var temp2 = [];
  temp2[0] = temp[1] + " AM";
  temp2[1] = temp[2] + " PM";
  temp2[2] = temp[3] + " PM";
  temp2[3] = temp[4] + " PM";
  temp2[4] = temp[5] + " PM";
  return temp2;
};

export const getNextPrayer = () => {
  const [fajr, sunrise, duhr, asr, maghrib, isha] = getAzanTimesOneDay();
  let x = moment.tz('America/New_York');
  if (x.isBefore(moment(fajr, "h:mm A"))) {
    return 1;
  } else if (x.isBefore(moment(sunrise, "h:mm A"))) {
    return 2;
  } else if (x.isBefore(moment(duhr, "h:mm A"))) {
    return 3;
  } else if (x.isBefore(moment(asr, "h:mm A"))) {
    return 4;
  } else if (x.isBefore(moment(maghrib, "h:mm A"))) {
    return 5;
  } else if (x.isBefore(moment(isha, "h:mm A"))) {
    return 6;
  } else return -1;
};
