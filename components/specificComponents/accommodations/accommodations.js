import React, { Component } from "react";
import css from "./accommodations.module.scss";
import Headermenu from "../../genericComponents/Headermenu/Headermenu";
import Hero from "../../genericComponents/Hero/Hero";
import { storyblokEditable, StoryblokComponent } from "@storyblok/react";
import { RichTextToHTML } from "../../../functions/storyBlokRichTextRenderer";
import List from "../../genericComponents/List/List";

export default class accommodations extends Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div {...storyblokEditable(this.props.blok)}>
				<Headermenu blok={this.props.menu.content}></Headermenu>

				<main>
					<Hero blok={this.props.blok} contentTypeTag="course" />
					<div className={css["accommodations-page__main-content"]}>
						<div id="accommodations-page__short-description" key="accommodations-page__short-description" className={css["accommodations-page__short-description"]}>
							<section className={css["rich-text-section--with-navigator"]}>
							<h2 className={css["rich-text-section__title"]}>accommodations Details</h2>
								<div className={css["rich-text-section__rich-text"]}>{RichTextToHTML({ document: this.props.blok.description })}</div>
							</section>
						</div>
						{this.props.blok.locationss && this.props.blok.locations.map((location) => (
							<Element blok={this.props.blok.locations} key={location.uid} />
							))}
					</div>
					{this.props.blok.additionalstuff.map((nestedBlok) => (
							<StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
						))}
				</main>
			</div>
		);

	}
}