import moment from "moment";
import { IQAMA_TIMES_YEAR } from "./IqamaArray";
var hmoment = require("moment-hijri");

const AZAN_TIMES_YEAR = [
  /* January */
  ["6:19AM", "12:26PM", "2:57PM", "5:15PM", "6:33PM"],
  ["6:19AM", "12:26PM", "2:58PM", "5:16PM", "6:34PM"],
  ["6:19AM", "12:27PM", "2:59PM", "5:17PM", "6:34PM"],
  ["6:19AM", "12:27PM", "2:59PM", "5:17PM", "6:34PM"],
  ["6:19AM", "12:27PM", "3:00PM", "5:18PM", "6:35PM"],
  ["6:19AM", "12:28PM", "3:01PM", "5:20PM", "6:37PM"],
  ["6:19AM", "12:28PM", "3:02PM", "5:21PM", "6:38PM"],
  ["6:19AM", "12:29PM", "3:03PM", "5:21PM", "6:38PM"],
  ["6:19AM", "12:29PM", "3:04PM", "5:22PM", "6:39PM"],
  ["6:19AM", "12:30PM", "3:05PM", "5:23PM", "6:40PM"],
  ["6:19AM", "12:30PM", "3:06PM", "5:24PM", "6:41PM"],
  ["6:19AM", "12:30PM", "3:06PM", "5:24PM", "6:41PM"],
  ["6:19AM", "12:31PM", "3:07PM", "5:26PM", "6:43PM"],
  ["6:19AM", "12:31PM", "3:08PM", "5:27PM", "6:44PM"],
  ["6:19AM", "12:32PM", "3:09PM", "5:28PM", "6:45PM"],
  ["6:19AM", "12:32PM", "3:10PM", "5:29PM", "6:45PM"],
  ["6:18AM", "12:32PM", "3:11PM", "5:30PM", "6:46PM"],
  ["6:18AM", "12:33PM", "3:12PM", "5:31PM", "6:47PM"],
  ["6:18AM", "12:33PM", "3:12PM", "5:31PM", "6:47PM"],
  ["6:17AM", "12:33PM", "3:14PM", "5:33PM", "6:49PM"],
  ["6:17AM", "12:34PM", "3:15PM", "5:35PM", "6:50PM"],
  ["6:17AM", "12:34PM", "3:16PM", "5:36PM", "6:51PM"],
  ["6:16AM", "12:34PM", "3:17PM", "5:37PM", "6:52PM"],
  ["6:16AM", "12:34PM", "3:18PM", "5:38PM", "6:53PM"],
  ["6:15AM", "12:35PM", "3:19PM", "5:39PM", "6:54PM"],
  ["6:15AM", "12:35PM", "3:19PM", "5:39PM", "6:54PM"],
  ["6:15AM", "12:35PM", "3:20PM", "5:40PM", "6:55PM"],
  ["6:14AM", "12:35PM", "3:21PM", "5:42PM", "6:57PM"],
  ["6:13AM", "12:35PM", "3:22PM", "5:43PM", "6:58PM"],
  ["6:12AM", "12:36PM", "3:23PM", "5:44PM", "6:59PM"],
  ["6:12AM", "12:36PM", "3:24PM", "5:45PM", "7:00PM"],
  /* February */
  ["6:11AM", "12:36PM", "3:25PM", "5:47PM", "7:01PM"],
  ["6:10AM", "12:36PM", "3:26PM", "5:48PM", "7:02PM"],
  ["6:10AM", "12:36PM", "3:26PM", "5:48PM", "7:02PM"],
  ["6:09AM", "12:36PM", "3:28PM", "5:50PM", "7:04PM"],
  ["6:08AM", "12:36PM", "3:29PM", "5:51PM", "7:05PM"],
  ["6:07AM", "12:36PM", "3:30PM", "5:52PM", "7:06PM"],
  ["6:06AM", "12:36PM", "3:31PM", "5:53PM", "7:07PM"],
  ["6:05AM", "12:36PM", "3:31PM", "5:54PM", "7:08PM"],
  ["6:04AM", "12:36PM", "3:32PM", "5:55PM", "7:09PM"],
  ["6:04AM", "12:36PM", "3:32PM", "5:55PM", "7:09PM"],
  ["6:03AM", "12:36PM", "3:33PM", "5:56PM", "7:09PM"],
  ["6:01AM", "12:36PM", "3:35PM", "5:59PM", "7:11PM"],
  ["6:00AM", "12:36PM", "3:36PM", "6:00PM", "7:12PM"],
  ["5:59AM", "12:36PM", "3:36PM", "6:01PM", "7:13PM"],
  ["5:58AM", "12:36PM", "3:37PM", "6:02PM", "7:14PM"],
  ["5:57AM", "12:36PM", "3:38PM", "6:03PM", "7:15PM"],
  ["5:57AM", "12:36PM", "3:38PM", "6:03PM", "7:15PM"],
  ["5:56AM", "12:36PM", "3:39PM", "6:04PM", "7:16PM"],
  ["5:54AM", "12:36PM", "3:40PM", "6:06PM", "7:18PM"],
  ["5:53AM", "12:36PM", "3:41PM", "6:07PM", "7:19PM"],
  ["5:52AM", "12:36PM", "3:42PM", "6:08PM", "7:20PM"],
  ["5:50AM", "12:36PM", "3:42PM", "6:09PM", "7:21PM"],
  ["5:49AM", "12:36PM", "3:43PM", "6:10PM", "7:22PM"],
  ["5:48AM", "12:35PM", "3:44PM", "6:11PM", "7:23PM"],
  ["5:48AM", "12:35PM", "3:44PM", "6:11PM", "7:23PM"],
  ["5:45AM", "12:35PM", "3:45PM", "6:13PM", "7:25PM"],
  ["5:44AM", "12:35PM", "3:46PM", "6:14PM", "7:26PM"],
  ["5:43AM", "12:35PM", "3:46PM", "6:15PM", "7:27PM"],
  ["5:43AM", "12:35PM", "3:46PM", "6:15PM", "7:27PM"],
  /* March */
  ["5:41AM", "12:35PM", "3:47PM", "6:16PM", "7:28PM"],
  ["5:40AM", "12:34PM", "3:48PM", "6:17PM", "7:29PM"],
  ["5:39AM", "12:34PM", "3:48PM", "6:18PM", "7:30PM"],
  ["5:39AM", "12:34PM", "3:48PM", "6:18PM", "7:30PM"],
  ["5:37AM", "12:34PM", "3:49PM", "6:19PM", "7:31PM"],
  ["5:35AM", "12:34PM", "3:50PM", "6:21PM", "7:32PM"],
  ["5:33AM", "12:33PM", "3:50PM", "6:22PM", "7:33PM"],
  /* March 8 - Beginning of DST start range (2nd Sunday range) */
  ["6:32AM", "1:33PM", "4:51PM", "7:23PM", "8:34PM"],
  ["6:30AM", "1:33PM", "4:52PM", "7:24PM", "8:35PM"],
  ["6:29AM", "1:33PM", "4:52PM", "7:25PM", "8:36PM"],
  ["6:27AM", "1:32PM", "4:52PM", "7:26PM", "8:37PM"],
  ["6:26AM", "1:32PM", "4:53PM", "7:26PM", "8:38PM"],
  ["6:24AM", "1:32PM", "4:53PM", "7:27PM", "8:39PM"],
  /* March 14 - End of DST start range (2nd Sunday range) */
  ["6:23AM", "1:31PM", "4:54PM", "7:28PM", "8:40PM"],
  ["6:21AM", "1:31PM", "4:54PM", "7:29PM", "8:41PM"],
  ["6:20AM", "1:31PM", "4:55PM", "7:30PM", "8:42PM"],
  ["6:18AM", "1:31PM", "4:55PM", "7:31PM", "8:43PM"],
  ["6:17AM", "1:30PM", "4:56PM", "7:32PM", "8:44PM"],
  ["6:15AM", "1:30PM", "4:56PM", "7:33PM", "8:45PM"],
  ["6:14AM", "1:30PM", "4:56PM", "7:34PM", "8:46PM"],
  ["6:12AM", "1:29PM", "4:57PM", "7:35PM", "8:47PM"],
  ["6:10AM", "1:29PM", "4:57PM", "7:36PM", "8:48PM"],
  ["6:09AM", "1:29PM", "4:58PM", "7:37PM", "8:49PM"],
  ["6:07AM", "1:29PM", "4:58PM", "7:37PM", "8:50PM"],
  ["6:06AM", "1:28PM", "4:58PM", "7:38PM", "8:51PM"],
  ["6:04AM", "1:28PM", "4:59PM", "7:39PM", "8:52PM"],
  ["6:02AM", "1:28PM", "4:59PM", "7:40PM", "8:53PM"],
  ["6:01AM", "1:27PM", "4:59PM", "7:41PM", "8:54PM"],
  ["5:59AM", "1:27PM", "5:00PM", "7:42PM", "8:55PM"],
  ["5:58AM", "1:27PM", "5:00PM", "7:43PM", "8:56PM"],
  ["5:56AM", "1:26PM", "5:00PM", "7:44PM", "8:57PM"],
  /* April */
  ["5:54AM", "1:26PM", "5:00PM", "7:45PM", "8:58PM"],
  ["5:53AM", "1:26PM", "5:01PM", "7:45PM", "8:59PM"],
  ["5:51AM", "1:26PM", "5:01PM", "7:46PM", "9:00PM"],
  ["5:50AM", "1:25PM", "5:01PM", "7:47PM", "9:01PM"],
  ["5:48AM", "1:25PM", "5:01PM", "7:48PM", "9:02PM"],
  ["5:46AM", "1:25PM", "5:02PM", "7:49PM", "9:03PM"],
  ["5:45AM", "1:24PM", "5:02PM", "7:50PM", "9:04PM"],
  ["5:43AM", "1:24PM", "5:02PM", "7:51PM", "9:05PM"],
  ["5:41AM", "1:24PM", "5:02PM", "7:52PM", "9:06PM"],
  ["5:40AM", "1:24PM", "5:03PM", "7:53PM", "9:07PM"],
  ["5:38AM", "1:23PM", "5:03PM", "7:53PM", "9:08PM"],
  ["5:37AM", "1:23PM", "5:03PM", "7:54PM", "9:10PM"],
  ["5:35AM", "1:23PM", "5:03PM", "7:55PM", "9:11PM"],
  ["5:33AM", "1:23PM", "5:03PM", "7:56PM", "9:12PM"],
  ["5:32AM", "1:22PM", "5:04PM", "7:57PM", "9:13PM"],
  ["5:30AM", "1:22PM", "5:04PM", "7:58PM", "9:14PM"],
  ["5:29AM", "1:22PM", "5:04PM", "7:59PM", "9:15PM"],
  ["5:27AM", "1:22PM", "5:04PM", "8:00PM", "9:16PM"],
  ["5:25AM", "1:21PM", "5:04PM", "8:01PM", "9:17PM"],
  ["5:24AM", "1:21PM", "5:05PM", "8:02PM", "9:18PM"],
  ["5:22AM", "1:21PM", "5:05PM", "8:02PM", "9:20PM"],
  ["5:21AM", "1:21PM", "5:05PM", "8:03PM", "9:21PM"],
  ["5:19AM", "1:21PM", "5:05PM", "8:04PM", "9:22PM"],
  ["5:18AM", "1:20PM", "5:05PM", "8:05PM", "9:23PM"],
  ["5:16AM", "1:20PM", "5:05PM", "8:06PM", "9:24PM"],
  ["5:15AM", "1:20PM", "5:06PM", "8:07PM", "9:25PM"],
  ["5:13AM", "1:20PM", "5:06PM", "8:08PM", "9:27PM"],
  ["5:12AM", "1:20PM", "5:06PM", "8:09PM", "9:28PM"],
  ["5:10AM", "1:20PM", "5:06PM", "8:10PM", "9:29PM"],
  ["5:09AM", "1:19PM", "5:06PM", "8:11PM", "9:30PM"],
  /* May */
  ["5:07AM", "1:19PM", "5:06PM", "8:11PM", "9:31PM"],
  ["5:06AM", "1:19PM", "5:07PM", "8:12PM", "9:32PM"],
  ["5:05AM", "1:19PM", "5:07PM", "8:13PM", "9:34PM"],
  ["5:03AM", "1:19PM", "5:07PM", "8:14PM", "9:35PM"],
  ["5:02AM", "1:19PM", "5:07PM", "8:15PM", "9:36PM"],
  ["5:01AM", "1:19PM", "5:07PM", "8:16PM", "9:37PM"],
  ["4:59AM", "1:19PM", "5:07PM", "8:17PM", "9:38PM"],
  ["4:58AM", "1:19PM", "5:08PM", "8:18PM", "9:40PM"],
  ["4:57AM", "1:19PM", "5:08PM", "8:19PM", "9:41PM"],
  ["4:55AM", "1:19PM", "5:08PM", "8:19PM", "9:42PM"],
  ["4:54AM", "1:19PM", "5:08PM", "8:20PM", "9:43PM"],
  ["4:53AM", "1:19PM", "5:08PM", "8:21PM", "9:44PM"],
  ["4:52AM", "1:19PM", "5:08PM", "8:22PM", "9:45PM"],
  ["4:51AM", "1:19PM", "5:09PM", "8:23PM", "9:47PM"],
  ["4:49AM", "1:19PM", "5:09PM", "8:24PM", "9:48PM"],
  ["4:48AM", "1:19PM", "5:09PM", "8:25PM", "9:49PM"],
  ["4:47AM", "1:19PM", "5:09PM", "8:25PM", "9:50PM"],
  ["4:46AM", "1:19PM", "5:09PM", "8:26PM", "9:51PM"],
  ["4:45AM", "1:19PM", "5:09PM", "8:27PM", "9:52PM"],
  ["4:44AM", "1:19PM", "5:10PM", "8:28PM", "9:53PM"],
  ["4:43AM", "1:19PM", "5:10PM", "8:29PM", "9:54PM"],
  ["4:42AM", "1:19PM", "5:10PM", "8:30PM", "9:56PM"],
  ["4:41AM", "1:19PM", "5:10PM", "8:30PM", "9:57PM"],
  ["4:40AM", "1:19PM", "5:10PM", "8:31PM", "9:58PM"],
  ["4:40AM", "1:19PM", "5:11PM", "8:32PM", "9:59PM"],
  ["4:39AM", "1:19PM", "5:11PM", "8:33PM", "10:00PM"],
  ["4:38AM", "1:19PM", "5:11PM", "8:33PM", "10:01PM"],
  ["4:37AM", "1:19PM", "5:11PM", "8:34PM", "10:02PM"],
  ["4:37AM", "1:20PM", "5:11PM", "8:35PM", "10:03PM"],
  ["4:36AM", "1:20PM", "5:12PM", "8:36PM", "10:04PM"],
  ["4:35AM", "1:20PM", "5:12PM", "8:36PM", "10:04PM"],
  /* June */
  ["4:35AM", "1:20PM", "5:12PM", "8:37PM", "10:05PM"],
  ["4:34AM", "1:20PM", "5:12PM", "8:37PM", "10:06PM"],
  ["4:34AM", "1:20PM", "5:13PM", "8:38PM", "10:07PM"],
  ["4:33AM", "1:21PM", "5:13PM", "8:39PM", "10:08PM"],
  ["4:33AM", "1:21PM", "5:13PM", "8:39PM", "10:09PM"],
  ["4:32AM", "1:21PM", "5:13PM", "8:40PM", "10:09PM"],
  ["4:32AM", "1:21PM", "5:13PM", "8:40PM", "10:10PM"],
  ["4:32AM", "1:21PM", "5:14PM", "8:41PM", "10:11PM"],
  ["4:31AM", "1:21PM", "5:14PM", "8:42PM", "10:11PM"],
  ["4:31AM", "1:22PM", "5:14PM", "8:42PM", "10:12PM"],
  ["4:31AM", "1:22PM", "5:14PM", "8:43PM", "10:13PM"],
  ["4:31AM", "1:22PM", "5:15PM", "8:43PM", "10:13PM"],
  ["4:31AM", "1:22PM", "5:15PM", "8:43PM", "10:14PM"],
  ["4:31AM", "1:22PM", "5:15PM", "8:44PM", "10:14PM"],
  ["4:31AM", "1:23PM", "5:15PM", "8:44PM", "10:15PM"],
  ["4:31AM", "1:23PM", "5:16PM", "8:45PM", "10:15PM"],
  ["4:31AM", "1:23PM", "5:16PM", "8:45PM", "10:16PM"],
  ["4:31AM", "1:23PM", "5:16PM", "8:45PM", "10:16PM"],
  ["4:31AM", "1:24PM", "5:16PM", "8:45PM", "10:16PM"],
  ["4:31AM", "1:24PM", "5:16PM", "8:46PM", "10:16PM"],
  ["4:31AM", "1:24PM", "5:17PM", "8:46PM", "10:17PM"],
  ["4:32AM", "1:24PM", "5:17PM", "8:46PM", "10:17PM"],
  ["4:32AM", "1:24PM", "5:17PM", "8:46PM", "10:17PM"],
  ["4:32AM", "1:25PM", "5:17PM", "8:46PM", "10:17PM"],
  ["4:33AM", "1:25PM", "5:18PM", "8:47PM", "10:17PM"],
  ["4:33AM", "1:25PM", "5:18PM", "8:47PM", "10:17PM"],
  ["4:33AM", "1:25PM", "5:18PM", "8:47PM", "10:17PM"],
  ["4:34AM", "1:25PM", "5:18PM", "8:47PM", "10:17PM"],
  ["4:34AM", "1:26PM", "5:18PM", "8:47PM", "10:17PM"],
  ["4:35AM", "1:26PM", "5:18PM", "8:47PM", "10:17PM"],
  /* July */
  ["4:36AM", "1:26PM", "5:19PM", "8:47PM", "10:17PM"],
  ["4:36AM", "1:26PM", "5:19PM", "8:46PM", "10:16PM"],
  ["4:37AM", "1:26PM", "5:19PM", "8:46PM", "10:16PM"],
  ["4:37AM", "1:27PM", "5:19PM", "8:46PM", "10:16PM"],
  ["4:38AM", "1:27PM", "5:19PM", "8:46PM", "10:15PM"],
  ["4:39AM", "1:27PM", "5:19PM", "8:46PM", "10:15PM"],
  ["4:40AM", "1:27PM", "5:19PM", "8:46PM", "10:15PM"],
  ["4:40AM", "1:27PM", "5:19PM", "8:45PM", "10:14PM"],
  ["4:41AM", "1:27PM", "5:20PM", "8:45PM", "10:14PM"],
  ["4:42AM", "1:28PM", "5:20PM", "8:45PM", "10:13PM"],
  ["4:43AM", "1:28PM", "5:20PM", "8:44PM", "10:12PM"],
  ["4:44AM", "1:28PM", "5:20PM", "8:44PM", "10:12PM"],
  ["4:45AM", "1:28PM", "5:20PM", "8:43PM", "10:11PM"],
  ["4:46AM", "1:28PM", "5:20PM", "8:43PM", "10:10PM"],
  ["4:47AM", "1:28PM", "5:20PM", "8:43PM", "10:10PM"],
  ["4:48AM", "1:28PM", "5:20PM", "8:42PM", "10:09PM"],
  ["4:49AM", "1:28PM", "5:20PM", "8:41PM", "10:08PM"],
  ["4:50AM", "1:28PM", "5:20PM", "8:41PM", "10:07PM"],
  ["4:51AM", "1:29PM", "5:20PM", "8:40PM", "10:06PM"],
  ["4:52AM", "1:29PM", "5:20PM", "8:40PM", "10:06PM"],
  ["4:53AM", "1:29PM", "5:20PM", "8:39PM", "10:05PM"],
  ["4:54AM", "1:29PM", "5:20PM", "8:38PM", "10:04PM"],
  ["4:55AM", "1:29PM", "5:20PM", "8:38PM", "10:03PM"],
  ["4:56AM", "1:29PM", "5:19PM", "8:37PM", "10:02PM"],
  ["4:57AM", "1:29PM", "5:19PM", "8:36PM", "10:00PM"],
  ["4:58AM", "1:29PM", "5:19PM", "8:35PM", "9:59PM"],
  ["4:59AM", "1:29PM", "5:19PM", "8:34PM", "9:58PM"],
  ["5:00AM", "1:29PM", "5:19PM", "8:34PM", "9:57PM"],
  ["5:01AM", "1:29PM", "5:19PM", "8:33PM", "9:56PM"],
  ["5:03AM", "1:29PM", "5:18PM", "8:32PM", "9:55PM"],
  ["5:04AM", "1:29PM", "5:18PM", "8:31PM", "9:54PM"],
  /* August */
  ["5:05AM", "1:29PM", "5:18PM", "8:30PM", "9:52PM"],
  ["5:06AM", "1:28PM", "5:18PM", "8:29PM", "9:51PM"],
  ["5:07AM", "1:28PM", "5:17PM", "8:28PM", "9:50PM"],
  ["5:08AM", "1:28PM", "5:17PM", "8:27PM", "9:48PM"],
  ["5:09AM", "1:28PM", "5:17PM", "8:26PM", "9:47PM"],
  ["5:10AM", "1:28PM", "5:16PM", "8:25PM", "9:46PM"],
  ["5:12AM", "1:28PM", "5:16PM", "8:24PM", "9:44PM"],
  ["5:13AM", "1:28PM", "5:16PM", "8:23PM", "9:43PM"],
  ["5:14AM", "1:28PM", "5:15PM", "8:22PM", "9:42PM"],
  ["5:15AM", "1:28PM", "5:15PM", "8:21PM", "9:40PM"],
  ["5:16AM", "1:27PM", "5:14PM", "8:19PM", "9:39PM"], //This is today
  ["5:17AM", "1:27PM", "5:14PM", "8:18PM", "9:37PM"],
  ["5:18AM", "1:27PM", "5:13PM", "8:17PM", "9:36PM"],
  ["5:20AM", "1:27PM", "5:13PM", "8:16PM", "9:34PM"],
  ["5:21AM", "1:27PM", "5:12PM", "8:15PM", "9:33PM"],
  ["5:22AM", "1:27PM", "5:12PM", "8:13PM", "9:31PM"],
  ["5:23AM", "1:26PM", "5:11PM", "8:12PM", "9:30PM"],
  ["5:24AM", "1:26PM", "5:11PM", "8:11PM", "9:28PM"],
  ["5:25AM", "1:26PM", "5:10PM", "8:09PM", "9:27PM"],
  ["5:26AM", "1:26PM", "5:10PM", "8:08PM", "9:25PM"],
  ["5:27AM", "1:25PM", "5:09PM", "8:07PM", "9:24PM"],
  ["5:28AM", "1:25PM", "5:08PM", "8:05PM", "9:22PM"],
  ["5:29AM", "1:25PM", "5:08PM", "8:04PM", "9:20PM"],
  ["5:30AM", "1:25PM", "5:07PM", "8:03PM", "9:19PM"],
  ["5:32AM", "1:24PM", "5:06PM", "8:01PM", "9:17PM"],
  ["5:33AM", "1:24PM", "5:06PM", "8:00PM", "9:16PM"],
  ["5:34AM", "1:24PM", "5:05PM", "7:59PM", "9:14PM"],
  ["5:35AM", "1:23PM", "5:04PM", "7:57PM", "9:12PM"],
  ["5:36AM", "1:23PM", "5:04PM", "7:56PM", "9:11PM"],
  ["5:37AM", "1:23PM", "5:03PM", "7:54PM", "9:09PM"],
  ["5:38AM", "1:23PM", "5:02PM", "7:53PM", "9:07PM"],
  /* September */
  ["5:39AM", "1:22PM", "5:01PM", "7:51PM", "9:06PM"],
  ["5:40AM", "1:22PM", "5:00PM", "7:50PM", "9:04PM"],
  ["5:41AM", "1:22PM", "5:00PM", "7:48PM", "9:02PM"],
  ["5:42AM", "1:21PM", "4:59PM", "7:47PM", "9:01PM"],
  ["5:43AM", "1:21PM", "4:58PM", "7:45PM", "8:59PM"],
  ["5:44AM", "1:21PM", "4:57PM", "7:44PM", "8:57PM"],
  ["5:45AM", "1:20PM", "4:56PM", "7:43PM", "8:56PM"],
  ["5:46AM", "1:20PM", "4:55PM", "7:41PM", "8:54PM"],
  ["5:47AM", "1:20PM", "4:54PM", "7:39PM", "8:52PM"],
  ["5:48AM", "1:19PM", "4:53PM", "7:38PM", "8:51PM"],
  ["5:49AM", "1:19PM", "4:53PM", "7:36PM", "8:49PM"],
  ["5:50AM", "1:19PM", "4:52PM", "7:35PM", "8:48PM"],
  ["5:51AM", "1:18PM", "4:51PM", "7:33PM", "8:46PM"],
  ["5:51AM", "1:18PM", "4:50PM", "7:32PM", "8:44PM"],
  ["5:52AM", "1:17PM", "4:49PM", "7:30PM", "8:43PM"],
  ["5:53AM", "1:17PM", "4:48PM", "7:29PM", "8:41PM"],
  ["5:54AM", "1:17PM", "4:47PM", "7:27PM", "8:39PM"],
  ["5:55AM", "1:16PM", "4:46PM", "7:26PM", "8:38PM"],
  ["5:56AM", "1:16PM", "4:45PM", "7:24PM", "8:36PM"],
  ["5:57AM", "1:16PM", "4:44PM", "7:23PM", "8:34PM"],
  ["5:58AM", "1:15PM", "4:43PM", "7:21PM", "8:33PM"],
  ["5:59AM", "1:15PM", "4:42PM", "7:20PM", "8:31PM"],
  ["6:00AM", "1:15PM", "4:41PM", "7:18PM", "8:30PM"],
  ["6:01AM", "1:14PM", "4:40PM", "7:17PM", "8:28PM"],
  ["6:01AM", "1:14PM", "4:39PM", "7:15PM", "8:26PM"],
  ["6:02AM", "1:14PM", "4:38PM", "7:13PM", "8:25PM"],
  ["6:03AM", "1:13PM", "4:37PM", "7:12PM", "8:23PM"],
  ["6:04AM", "1:13PM", "4:35PM", "7:10PM", "8:22PM"],
  ["6:05AM", "1:13PM", "4:34PM", "7:09PM", "8:20PM"],
  ["6:06AM", "1:12PM", "4:33PM", "7:07PM", "8:19PM"],
  /* October */
  ["6:07AM", "1:12PM", "4:32PM", "7:06PM", "8:17PM"],
  ["6:08AM", "1:12PM", "4:31PM", "7:04PM", "8:16PM"],
  ["6:09AM", "1:11PM", "4:30PM", "7:03PM", "8:14PM"],
  ["6:09AM", "1:11PM", "4:29PM", "7:01PM", "8:13PM"],
  ["6:10AM", "1:11PM", "4:28PM", "7:00PM", "8:11PM"],
  ["6:11AM", "1:10PM", "4:27PM", "6:58PM", "8:10PM"],
  ["6:12AM", "1:10PM", "4:26PM", "6:57PM", "8:08PM"],
  ["6:13AM", "1:10PM", "4:25PM", "6:56PM", "8:07PM"],
  ["6:14AM", "1:10PM", "4:24PM", "6:54PM", "8:05PM"],
  ["6:15AM", "1:09PM", "4:23PM", "6:53PM", "8:04PM"],
  ["6:16AM", "1:09PM", "4:22PM", "6:51PM", "8:02PM"],
  ["6:16AM", "1:09PM", "4:21PM", "6:50PM", "8:01PM"],
  ["6:17AM", "1:08PM", "4:20PM", "6:48PM", "8:00PM"],
  ["6:18AM", "1:08PM", "4:19PM", "6:47PM", "7:58PM"],
  ["6:19AM", "1:08PM", "4:17PM", "6:46PM", "7:57PM"],
  ["6:20AM", "1:08PM", "4:16PM", "6:44PM", "7:56PM"],
  ["6:21AM", "1:08PM", "4:15PM", "6:43PM", "7:54PM"],
  ["6:22AM", "1:07PM", "4:14PM", "6:42PM", "7:53PM"],
  ["6:23AM", "1:07PM", "4:13PM", "6:40PM", "7:52PM"],
  ["6:23AM", "1:07PM", "4:12PM", "6:39PM", "7:51PM"],
  ["6:24AM", "1:07PM", "4:11PM", "6:38PM", "7:49PM"],
  ["6:25AM", "1:07PM", "4:10PM", "6:36PM", "7:48PM"],
  ["6:26AM", "1:07PM", "4:09PM", "6:35PM", "7:47PM"],
  ["6:27AM", "1:06PM", "4:08PM", "6:34PM", "7:46PM"],
  ["6:28AM", "1:06PM", "4:08PM", "6:33PM", "7:45PM"],
  ["6:29AM", "1:06PM", "4:07PM", "6:32PM", "7:44PM"],
  ["6:30AM", "1:06PM", "4:06PM", "6:30PM", "7:43PM"],
  ["6:31AM", "1:06PM", "4:05PM", "6:29PM", "7:42PM"],
  ["6:31AM", "1:06PM", "4:04PM", "6:28PM", "7:40PM"],
  ["6:32AM", "1:06PM", "4:03PM", "6:27PM", "7:39PM"],
  ["6:33AM", "1:06PM", "4:02PM", "6:26PM", "7:38PM"],
  /* November 1 - Beginning of DST end range (1st Sunday range) */
  ["5:34AM", "12:06PM", "3:01PM", "5:25PM", "6:37PM"],
  ["5:35AM", "12:06PM", "3:00PM", "5:24PM", "6:37PM"],
  ["5:36AM", "12:06PM", "3:00PM", "5:23PM", "6:36PM"],
  ["5:37AM", "12:06PM", "2:59PM", "5:22PM", "6:35PM"],
  ["5:38AM", "12:06PM", "2:58PM", "5:21PM", "6:34PM"],
  ["5:39AM", "12:06PM", "2:57PM", "5:20PM", "6:33PM"],
  /* November 7 - End of DST end range (1st Sunday range) */
  ["5:40AM", "12:06PM", "2:57PM", "5:19PM", "6:32PM"],
  ["5:41AM", "12:06PM", "2:56PM", "5:18PM", "6:31PM"],
  ["5:41AM", "12:06PM", "2:56PM", "5:18PM", "6:31PM"],
  ["5:41AM", "12:06PM", "2:55PM", "5:17PM", "6:31PM"],
  ["5:43AM", "12:06PM", "2:54PM", "5:15PM", "6:29PM"],
  ["5:44AM", "12:06PM", "2:53PM", "5:14PM", "6:29PM"],
  ["5:45AM", "12:06PM", "2:53PM", "5:14PM", "6:28PM"],
  ["5:46AM", "12:07PM", "2:52PM", "5:13PM", "6:27PM"],
  ["5:47AM", "12:07PM", "2:51PM", "5:12PM", "6:27PM"],
  ["5:48AM", "12:07PM", "2:51PM", "5:12PM", "6:26PM"],
  ["5:48AM", "12:07PM", "2:51PM", "5:12PM", "6:26PM"],
  ["5:50AM", "12:07PM", "2:50PM", "5:10PM", "6:25PM"],
  ["5:51AM", "12:08PM", "2:49PM", "5:10PM", "6:25PM"],
  ["5:51AM", "12:08PM", "2:49PM", "5:09PM", "6:24PM"],
  ["5:52AM", "12:08PM", "2:49PM", "5:09PM", "6:24PM"],
  ["5:53AM", "12:08PM", "2:48PM", "5:08PM", "6:23PM"],
  ["5:54AM", "12:09PM", "2:48PM", "5:08PM", "6:23PM"],
  ["5:54AM", "12:09PM", "2:48PM", "5:08PM", "6:23PM"],
  ["5:56AM", "12:09PM", "2:47PM", "5:07PM", "6:23PM"],
  ["5:57AM", "12:09PM", "2:47PM", "5:06PM", "6:22PM"],
  ["5:58AM", "12:10PM", "2:47PM", "5:06PM", "6:22PM"],
  ["5:58AM", "12:10PM", "2:47PM", "5:06PM", "6:22PM"],
  ["5:59AM", "12:10PM", "2:46PM", "5:05PM", "6:22PM"],
  ["6:00AM", "12:11PM", "2:46PM", "5:05PM", "6:22PM"],
  /* December */
  ["6:00AM", "12:11PM", "2:46PM", "5:05PM", "6:22PM"],
  ["6:01AM", "12:11PM", "2:46PM", "5:05PM", "6:21PM"],
  ["6:03AM", "12:12PM", "2:46PM", "5:05PM", "6:21PM"],
  ["6:03AM", "12:12PM", "2:46PM", "5:05PM", "6:21PM"],
  ["6:04AM", "12:13PM", "2:46PM", "5:05PM", "6:21PM"],
  ["6:05AM", "12:13PM", "2:46PM", "5:04PM", "6:21PM"],
  ["6:06AM", "12:14PM", "2:46PM", "5:05PM", "6:22PM"],
  ["6:06AM", "12:14PM", "2:46PM", "5:05PM", "6:22PM"],
  ["6:06AM", "12:14PM", "2:46PM", "5:05PM", "6:22PM"],
  ["6:08AM", "12:15PM", "2:47PM", "5:05PM", "6:22PM"],
  ["6:09AM", "12:15PM", "2:47PM", "5:05PM", "6:22PM"],
  ["6:09AM", "12:16PM", "2:47PM", "5:05PM", "6:23PM"],
  ["6:10AM", "12:16PM", "2:47PM", "5:05PM", "6:23PM"],
  ["6:11AM", "12:17PM", "2:48PM", "5:06PM", "6:23PM"],
  ["6:11AM", "12:17PM", "2:48PM", "5:06PM", "6:23PM"],
  ["6:11AM", "12:17PM", "2:48PM", "5:06PM", "6:23PM"],
  ["6:12AM", "12:18PM", "2:48PM", "5:06PM", "6:24PM"],
  ["6:13AM", "12:19PM", "2:49PM", "5:07PM", "6:25PM"],
  ["6:14AM", "12:19PM", "2:49PM", "5:07PM", "6:25PM"],
  ["6:14AM", "12:20PM", "2:50PM", "5:08PM", "6:25PM"],
  ["6:15AM", "12:20PM", "2:50PM", "5:08PM", "6:26PM"],
  ["6:15AM", "12:21PM", "2:51PM", "5:09PM", "6:26PM"],
  ["6:15AM", "12:21PM", "2:51PM", "5:09PM", "6:26PM"],
  ["6:16AM", "12:21PM", "2:51PM", "5:09PM", "6:27PM"],
  ["6:16AM", "12:22PM", "2:53PM", "5:10PM", "6:28PM"],
  ["6:17AM", "12:23PM", "2:53PM", "5:11PM", "6:29PM"],
  ["6:17AM", "12:23PM", "2:54PM", "5:12PM", "6:29PM"],
  ["6:17AM", "12:24PM", "2:54PM", "5:12PM", "6:30PM"],
  ["6:18AM", "12:24PM", "2:55PM", "5:13PM", "6:31PM"],
  ["6:18AM", "12:25PM", "2:56PM", "5:14PM", "6:31PM"],
  ["6:18AM", "12:25PM", "2:56PM", "5:14PM", "6:31PM"],
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
const getIndex = (selectedDate = moment()) => {
  const month = selectedDate.month() + 1;
  const day = selectedDate.dayOfYear();
  const isLeapYear = selectedDate.isLeapYear();
  return !isLeapYear && month > FEBRUARY ? day : day - 1;
};

//Get Azan Times of Selected Day, with corrections if DST not started yet
const getAzanTimesOneDay = (selectedDate = moment()) => {
  var AzanTimesOneDay = [];
  const dayOfYear = getIndex(selectedDate);
  const timeShift = getTimeShift(selectedDate); // Handle DST

  for (var prayerIndex = 0; prayerIndex < 5; prayerIndex++) {
    AzanTimesOneDay[prayerIndex] = moment(
      AZAN_TIMES_YEAR[dayOfYear][prayerIndex],
      "h:mma"
    )
      .add(timeShift, "hours")
      .format("h:mm A");
  }
  return AzanTimesOneDay;
};
export const getIqamaWeek = (selectedDate = moment()) => {
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

function get365AzanTimes() {
  let AzanTimes365 = [];
  for (var i = 0; i < 1000; i++) {
    AzanTimes365[i] = getAzanTimesOneDay(new moment().add(i, "days"));
    AzanTimes365[i][5] = new moment().add(i, "days");
  }
  return AzanTimes365;
}
export const AzanTimes365 = get365AzanTimes();
export const getNextPrayer = () => {
  const [fajr, duhr, asr, maghrib, isha] = getAzanTimesOneDay();
  let x = moment();
  if (x.isBefore(moment(fajr, "h:mm A"))) {
    return 1;
  } else if (x.isBefore(moment(duhr, "h:mm A"))) {
    return 2;
  } else if (x.isBefore(moment(asr, "h:mm A"))) {
    return 3;
  } else if (x.isBefore(moment(maghrib, "h:mm A"))) {
    return 4;
  } else if (x.isBefore(moment(isha, "h:mm A"))) {
    return 5;
  } else return -1;
};
