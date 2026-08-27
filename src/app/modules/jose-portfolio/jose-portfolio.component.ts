import { Component } from '@angular/core';
import { JspHeaderComponent } from "./components/jsp-header/jsp-header.component";
import { ThemeToggleBtnComponent } from "../../prt-ui/theme-toggle-btn/theme-toggle-btn.component";
import { JspSkillsComponent } from "./components/jsp-skills/jsp-skills.component";
import { JspArticleListComponent } from "./components/jsp-article-list/jsp-article-list.component";

@Component({
  selector: 'app-jose-portfolio',
  imports: [JspHeaderComponent, ThemeToggleBtnComponent, JspSkillsComponent, JspArticleListComponent],
  templateUrl: './jose-portfolio.component.html'
})
export class JosePortfolioComponent {

}
