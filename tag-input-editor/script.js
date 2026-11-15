document.addEventListener("DOMContentLoaded", () => {
    class Tag {
        #name;
        #tag;
        #deleteIcon;
        next = {};
        prev = {};
        constructor(name) {
            this.#name = name;
            this.#build();
        }

        #build() {
            this.#tag = document.createElement("div")
            this.#tag.className = "tag";
            const tagLabel = document.createElement("span");
            tagLabel.textContent = this.#name;
            this.#deleteIcon = document.createElement("button");
            this.#tag.append(tagLabel, this.#deleteIcon);
        }

        get getTag() { return this.#tag; }
        get getName() { return this.#name; }
        get getDeleteIcon() { return this.#deleteIcon; }
    }

    class TagInput {
        #container;
        #head;
        #tail;
        #size;

        constructor(container) {
            this.#container = container;
            this.#head = {};
            this.#tail = {};
            this.#head.next = this.#tail;
            this.#tail.prev = this.#head;
            this.#size = 0;
        }

        addTag(tag) {
            this.#linkTag(this.#tail.prev, tag);
            tag.getDeleteIcon.addEventListener("click", () => {
                this.removeTag(tag);
            });
            this.#container.append(tag.getTag);
            ++this.#size;
            return true;
        }

        removeTag(tag) {
            this.#unlinkTag(tag);
            tag.getTag.remove();
            --this.#size;
            return true;
        }

        removeLastTag() {
            if (this.#size === 0) {
                return false;
            }
            return this.removeTag(this.#tail.prev);
        }

        #linkTag(currTag, newTag) {
            newTag.prev = currTag;
            newTag.next = currTag.next;
            currTag.next.prev = newTag;
            currTag.next = newTag;
        }

        #unlinkTag(currTag) {
            currTag.prev.next = currTag.next;
            currTag.next.prev = currTag.prev;
            currTag.prev = currTag.next = {};
        }
    }

    const tags = document.querySelector(".tags");
    const input = document.querySelector("input");
    const tagInput = new TagInput(tags);
    input.addEventListener("keydown", (event) => {
        const name = input.value.trim();

        if (event.key === "Enter" || event.key === ",") {
            event.preventDefault();
            if (!name) return;
            tagInput.addTag(new Tag(name));
            input.value = "";
        } else if (event.key === "Backspace" && !input.value) {
            tagInput.removeLastTag();
        }
    });
});
