# -*- encoding : utf-8 -*-
require 'spec_helper'

describe "about" do
  describe "home page" do
    it "should have the content '關於我們'" do
      # Run the generator again with the --webrat flag if you want to use webrat methods/matchers
      visit "/about/home"
      page.should have_selector('h1','關於我們')
    end
  end
end

describe "about" do
  describe "news page" do
    it "should have the content '最新消息'" do
      # Run the generator again with the --webrat flag if you want to use webrat methods/matchers
      visit "/about/news"
      page.should have_selector('h1','最新消息')
    end
  end
end
