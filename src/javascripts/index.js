import application from 'CssFolder/application.scss'
import { sayHello } from '../javascripts/greeting.js'
import $ from 'jquery'

sayHello()
$('body').append('<div style="background: yellow; padding: 10px;">Hello jQuery!</div>')