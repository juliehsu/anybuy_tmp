# -*- encoding : utf-8 -*-
class HelpController < ApplicationController
  def tiro
  @title = "新手教學"
  end

  def question
  @title = "常見問題"
  end

  def contact
  @title = "聯絡我們"
  end
end
