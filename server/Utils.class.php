<?php

/**
 * Created by PhpStorm.
 * User: Wendannor
 * Date: 06/02/14
 * Time: 22:31
 */
class Utils
{


    /**
     * Translates a camel case string into a string with
     * underscores (e.g. firstName -> first_name)
     *
     * ref : http://paulferrett.com/2009/php-camel-case-functions/
     *
     * @param string $str String in camel case format
     * @return string $str Translated into underscore format
     */
    static function camelCaseToSnakeCase($str)
    {
        $str[0] = strtolower($str[0]);
        $func = create_function('$c', 'return "_" . strtolower($c[1]);');
        return preg_replace_callback('/([A-Z])/', $func, $str);
    }

    /**
     * Translates a string with underscores
     * into camel case (e.g. first_name -> firstName)
     *
     * ref : http://paulferrett.com/2009/php-camel-case-functions/
     *
     * @param string $str String in underscore format
     * @param bool $capitalise_first_char If true, capitalise the first char in $str
     * @return string $str translated into camel caps
     */
    static function snakeCaseToCamelCase($str, $capitalise_first_char = false)
    {
        if ($capitalise_first_char) {
            $str[0] = strtoupper($str[0]);
        }
        $func = create_function('$c', 'return strtoupper($c[1]);');
        return preg_replace_callback('/_([a-z])/', $func, $str);
    }

    static function arraySnakeCaseToCamelCase($items)
    {
        foreach ($items as $key => $item) {
            $key2 = Utils::snakeCaseToCamelCase($key);
            if ($key2 != $key) {
                unset($items[$key]);
                $items[$key2] = $item;
                $key = $key2;
            }
            if (is_array($item)) {
                arraySnakeCaseToCamelCase($items[$key]);
            }
        }
        return $items;
    }

    static function arrayCamelCaseToSnakeCase($items)
    {
        foreach ($items as $key => $item) {
            $key2 = Utils::camelCaseToSnakeCase($key);
            if ($key2 != $key) {
                unset($items[$key]);
                $items[$key2] = $item;
                $key = $key2;
            }
            if (is_array($item)) {
                arrayCamelCaseToSnakeCase($items[$key]);
            }
        }
        return $items;
    }
} 