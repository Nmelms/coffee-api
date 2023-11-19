<?php
/*
 * Copyright 2014 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not
 * use this file except in compliance with the License. You may obtain a copy of
 * the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations under
 * the License.
 */

namespace Automattic\WooCommerce\GoogleListingsAndAds\Vendor\Google\Service\ShoppingContent;

class CutoffTime extends \Automattic\WooCommerce\GoogleListingsAndAds\Vendor\Google\Model
{
  /**
   * @var string
   */
  public $hour;
  /**
   * @var string
   */
  public $minute;
  /**
   * @var string
   */
  public $timezone;

  /**
   * @param string
   */
  public function setHour($hour)
  {
    $this->hour = $hour;
  }
  /**
   * @return string
   */
  public function getHour()
  {
    return $this->hour;
  }
  /**
   * @param string
   */
  public function setMinute($minute)
  {
    $this->minute = $minute;
  }
  /**
   * @return string
   */
  public function getMinute()
  {
    return $this->minute;
  }
  /**
   * @param string
   */
  public function setTimezone($timezone)
  {
    $this->timezone = $timezone;
  }
  /**
   * @return string
   */
  public function getTimezone()
  {
    return $this->timezone;
  }
}

// Adding a class alias for backwards compatibility with the previous class name.
class_alias(CutoffTime::class, 'Google_Service_ShoppingContent_CutoffTime');
