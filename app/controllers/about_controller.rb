# -*- encoding : utf-8 -*-
class AboutController < ApplicationController

  def news
  @title = "最新消息"
  end

  def home
  @title = "關於我們"
  end
end
